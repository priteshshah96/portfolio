import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const NetworkVisualization = () => {
  const canvasRef = useRef(null);
  const [hoveredNeuron, setHoveredNeuron] = useState(null);
  const [visualizationMode, setVisualizationMode] = useState('both');
  const [networkSpeed, setNetworkSpeed] = useState(1);
  const [showControls, setShowControls] = useState(false);


  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    const neurons = [];
    let activationWave = 0;
    let backpropWave = -1;
    let phase = 'forward';
    let mousePos = { x: 0, y: 0 };

    const colors = {
      forward: [
        'rgba(59, 130, 246, 0.8)',  // Blue
        'rgba(99, 102, 241, 0.8)',  // Indigo
        'rgba(139, 92, 246, 0.8)',  // Purple
      ],
      backward: [
        'rgba(236, 72, 153, 0.8)',  // Pink
        'rgba(239, 68, 68, 0.8)',   // Red
        'rgba(249, 115, 22, 0.8)',  // Orange
      ]
    };

    class Neuron {
      constructor(x, y, layer, index) {
        this.x = x;
        this.y = y;
        this.layer = layer;
        this.index = index;
        this.activation = 0;
        this.connections = [];
        this.weights = [];
        this.bias = Math.random() * 0.4 - 0.2;
        this.oscillationSpeed = Math.random() * 0.002 + 0.001;
        this.oscillationAmplitude = Math.random() * 15 + 5;
        this.oscillationOffset = Math.random() * Math.PI * 2;
        this.currentX = x;
        this.currentY = y;
      }

      updatePosition(time) {
        this.currentX = this.x + Math.sin(time * this.oscillationSpeed + this.oscillationOffset) * this.oscillationAmplitude;
        this.currentY = this.y + Math.cos(time * this.oscillationSpeed + this.oscillationOffset) * this.oscillationAmplitude;
      }

      draw(time) {
        this.updatePosition(time);

        // Draw connections
        this.connections.forEach((neuron, i) => {
          neuron.updatePosition(time);
          const gradient = ctx.createLinearGradient(
            this.currentX, this.currentY,
            neuron.currentX, neuron.currentY
          );

          let alpha = 0.2;
          const colorIndex = Math.floor(this.layer % colors[phase === 'forward' ? 'forward' : 'backward'].length);
          const currentColor = colors[phase === 'forward' ? 'forward' : 'backward'][colorIndex];
          
          if ((visualizationMode !== 'backward' && phase === 'forward' && this.layer === activationWave) ||
              (visualizationMode !== 'forward' && phase === 'backward' && this.layer === backpropWave)) {
            alpha = 0.8;
            
            // Animate signal along connection
            const progress = (Date.now() * networkSpeed % 1000) / 1000;
            const midX = this.currentX + (neuron.currentX - this.currentX) * progress;
            const midY = this.currentY + (neuron.currentY - this.currentY) * progress;
            
            ctx.beginPath();
            ctx.arc(midX, midY, 4, 0, Math.PI * 2);
            ctx.fillStyle = currentColor;
            ctx.fill();
          }

          gradient.addColorStop(0, currentColor.replace(/[\d.]+\)$/g, `${alpha})`));
          gradient.addColorStop(1, currentColor.replace(/[\d.]+\)$/g, `${alpha})`));
          
          ctx.beginPath();
          ctx.strokeStyle = gradient;
          ctx.lineWidth = Math.abs(this.weights[i]) * 3;
          ctx.moveTo(this.currentX, this.currentY);
          ctx.lineTo(neuron.currentX, neuron.currentY);
          ctx.stroke();
        });

        // Draw neuron
        const isActive = (phase === 'forward' && this.layer === activationWave) ||
                        (phase === 'backward' && this.layer === backpropWave);
        
        const colorIndex = Math.floor(this.layer % colors[phase === 'forward' ? 'forward' : 'backward'].length);
        const neuronColor = colors[phase === 'forward' ? 'forward' : 'backward'][colorIndex];
        
        // Glow effect
        if (isActive || this.isHovered(mousePos.x, mousePos.y)) {
          ctx.shadowColor = neuronColor;
          ctx.shadowBlur = 15;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.beginPath();
        ctx.arc(this.currentX, this.currentY, 6, 0, Math.PI * 2);
        ctx.fillStyle = isActive ? neuronColor : neuronColor.replace(/[\d.]+\)$/g, '0.3)');
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();
      }

      isHovered(mouseX, mouseY) {
        const dx = mouseX - this.currentX;
        const dy = mouseY - this.currentY;
        return Math.sqrt(dx * dx + dy * dy) < 15;
      }
    }

    const initNetwork = () => {
      const layers = [4, 6, 8, 6, 4];
      const startX = canvas.width * 0.15;
      const startY = canvas.height * 0.5;
      const horizontalSpacing = canvas.width * 0.15;
      const getLayerHeight = (neuronsCount) => canvas.height * 0.6 * (neuronsCount / Math.max(...layers));

      // Create neurons with dynamic positioning
      layers.forEach((neuronsInLayer, layerIndex) => {
        const layerHeight = getLayerHeight(neuronsInLayer);
        const layerStartY = startY - layerHeight / 2;
        const verticalSpacing = layerHeight / (neuronsInLayer - 1 || 1);

        for (let i = 0; i < neuronsInLayer; i++) {
          const randX = (Math.random() - 0.5) * 40;
          const randY = (Math.random() - 0.5) * 40;
          const x = startX + layerIndex * horizontalSpacing + randX;
          const y = layerStartY + i * verticalSpacing + randY;
          neurons.push(new Neuron(x, y, layerIndex, i));
        }
      });

      // Create connections with random weights
      neurons.forEach(neuron => {
        const nextLayer = neurons.filter(n => n.layer === neuron.layer + 1);
        nextLayer.forEach(nextNeuron => {
          neuron.connections.push(nextNeuron);
          neuron.weights.push(Math.random() * 2 - 1);
        });
      });
    };

    const updatePhases = () => {
      const time = Date.now() * networkSpeed;
      if (time % 1000 < 50) {
        if (phase === 'forward' && visualizationMode !== 'backward') {
          activationWave++;
          if (activationWave >= 5) {
            activationWave = -1;
            if (visualizationMode === 'both') {
              phase = 'backward';
              backpropWave = 4;
            } else {
              activationWave = 0;
            }
          }
        } else if (phase === 'backward' && visualizationMode !== 'forward') {
          backpropWave--;
          if (backpropWave < 0) {
            phase = 'forward';
            activationWave = 0;
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const time = Date.now();
      
      updatePhases();
      neurons.forEach(neuron => neuron.draw(time));
      
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      neurons.length = 0;
      initNetwork();
    };

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mousePos = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
      
      setHoveredNeuron(neurons.find(n => n.isHovered(mousePos.x, mousePos.y)));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [visualizationMode, networkSpeed]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-20 bg-transparent pointer-events-none"
      />
      
      {/* Floating Controls Container */}
      <motion.div 
        className="fixed bottom-4 left-4 z-50"
        initial={false}
        animate={{ y: showControls ? -10 : 0 }}
      >
        {/* Control Icon Button */}
        <motion.button
          className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-black/30 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowControls(!showControls)}
        >
          <i className={`fas fa-${showControls ? 'times' : 'sliders-h'} text-white/80`} />
        </motion.button>

        {/* Controls Panel */}
        <AnimatePresence>
          {showControls && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="absolute bottom-16 left-0 p-4 bg-black/30 backdrop-blur-md rounded-lg flex flex-col gap-4 min-w-[200px]"
            >
              <select
                value={visualizationMode}
                onChange={(e) => setVisualizationMode(e.target.value)}
                className="w-full bg-white/10 backdrop-blur-sm text-white px-3 py-2 rounded-lg border border-white/20 cursor-pointer hover:bg-white/20 transition-colors"
              >
                <option value="both">Both Propagations</option>
                <option value="forward">Forward Only</option>
                <option value="backward">Backward Only</option>
              </select>
              
              <div className="flex flex-col gap-2">
                <span className="text-white/80 text-sm">Animation Speed</span>
                <input
                  type="range"
                  min="0.5"
                  max="2"
                  step="0.1"
                  value={networkSpeed}
                  onChange={(e) => setNetworkSpeed(parseFloat(e.target.value))}
                  className="w-full accent-blue-500"
                />
                <span className="text-white/60 text-xs text-right">
                  {networkSpeed.toFixed(1)}x
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Tooltip */}
      {hoveredNeuron && (
        <div
          className="fixed z-50 bg-black/80 text-white p-2 rounded text-sm pointer-events-none"
          style={{
            left: canvasRef.current?.getBoundingClientRect().left + hoveredNeuron.currentX + 20,
            top: canvasRef.current?.getBoundingClientRect().top + hoveredNeuron.currentY - 40,
          }}
        >
          Layer {hoveredNeuron.layer + 1}, Neuron {hoveredNeuron.index + 1}
          <br />
          Bias: {hoveredNeuron.bias.toFixed(3)}
        </div>
      )}
    </>
  );
};