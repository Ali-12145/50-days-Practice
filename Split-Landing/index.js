const container = document.createElement("div");
container.className = "container";

const left_side = document.createElement("div");
left_side.className = " split left";
const right_side = document.createElement("div");
right_side.className = "split right";

container.appendChild(left_side);
container.appendChild(right_side);
document.body.appendChild(container);



left_side.addEventListener("mouseenter", () => {
    left_side.style.width = "75%";
    right_side.style.width = "25%";
})
left_side.addEventListener("mouseleave", () => {
    left_side.style.width = "50%";
    right_side.style.width = "50%";
})

right_side.addEventListener("mouseenter", () => {
    right_side.style.width = "75%";
    left_side.style.width = "25%";


})
right_side.addEventListener("mouseleave", () => {
    right_side.style.width = "50%";
    left_side.style.width = "50%";


})