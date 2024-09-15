
const container = document.createElement("div");
container.className = `container`;



const textInput = document.createElement("input");
textInput.className = "active";
textInput.placeholder = "Search...";
document.body.appendChild(container);
container.appendChild(textInput);

const btn = document.createElement("button");

const icon = document.createElement("i");
icon.className = "fas fa-search"

btn.appendChild(icon);
btn.className = "icon-btn";
container.appendChild(btn);


btn.addEventListener("click", () => {
    textInput.classList.toggle("active");
})