const body = document.body;
const container = document.createElement("div");
container.className = "container";
const left = document.createElement("div");
const center = document.createElement("div");
const right = document.createElement("div");
left.className = "left";
center.className = "center";
right.className = "right";
container.appendChild(left);
container.appendChild(center);
container.appendChild(right);
body.appendChild(container);

