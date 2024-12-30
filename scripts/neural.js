const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.id = "neural-network";
document.body.appendChild(svg);

const width = window.innerWidth;
const height = window.innerHeight;
svg.setAttribute("width", width);
svg.setAttribute("height", height);

const nodes = Array.from({ length: 20 }, () => ({
  x: Math.random() * width,
  y: Math.random() * height,
}));

const edges = nodes.map((_, i) => ({
  source: nodes[i],
  target: nodes[Math.floor(Math.random() * nodes.length)],
}));

edges.forEach(({ source, target }) => {
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", source.x);
  line.setAttribute("y1", source.y);
  line.setAttribute("x2", target.x);
  line.setAttribute("y2", target.y);
  line.classList.add("edge");
  svg.appendChild(line);
});

nodes.forEach(({ x, y }) => {
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", x);
  circle.setAttribute("cy", y);
  circle.setAttribute("r", 6);
  circle.classList.add("node");
  svg.appendChild(circle);
});

// Animate signals
edges.forEach(({ source, target }) => {
  const signal = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  signal.setAttribute("cx", source.x);
  signal.setAttribute("cy", source.y);
  signal.setAttribute("r", 3);
  signal.classList.add("signal");
  svg.appendChild(signal);

  gsap.to(signal, {
    duration: 2,
    attr: { cx: target.x, cy: target.y },
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });
});
