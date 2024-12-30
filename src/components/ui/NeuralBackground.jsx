import React, { useEffect, useState } from 'react';

export const NeuralBackground = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    // Generate nodes
    const newNodes = Array.from({ length: 20 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight
    }));

    // Generate edges
    const newEdges = newNodes.map((_, i) => ({
      source: newNodes[i],
      target: newNodes[Math.floor(Math.random() * newNodes.length)]
    }));

    setNodes(newNodes);
    setEdges(newEdges);
  }, []);

  return (
    <svg className="fixed inset-0 -z-10" id="neural-network">
      {edges.map((edge, i) => (
        <line
          key={i}
          x1={edge.source.x}
          y1={edge.source.y}
          x2={edge.target.x}
          y2={edge.target.y}
          className="edge"
        />
      ))}
      {nodes.map((node, i) => (
        <circle
          key={i}
          cx={node.x}
          cy={node.y}
          r={6}
          className="node"
        />
      ))}
    </svg>
  );
};