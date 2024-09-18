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
body.textContent = "Press any key to Generate Keycodes"
body.style.fontSize = "2em";



document.addEventListener("keypress", (e) => {
    
    body.textContent =""
    body.style.fontSize = "1.25em";
    body.appendChild(container);
    left.textContent = `${e.key === ' '? 'Space':e.key}`; 
    center.textContent = e.keyCode;
    right.textContent = e.code;
    
})