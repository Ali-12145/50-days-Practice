const container = document.querySelector(".container");
console.log(container);
for (let i = 0; i < 4; i++){
    const circleEl = document.createElement("div");
    circleEl.className = `circle${i + 1} circle`;
    circleEl.textContent = `${i + 1}`;
    container.appendChild(circleEl);
}

const progressBar = document.createElement("div");
progressBar.className = "progress"
container.appendChild(progressBar);


const prevBtn = document.createElement("button");
const nextBtn = document.createElement("button");
const btnContainer = document.querySelector(".nig");
nextBtn.textContent = "Next"
prevBtn.textContent = "Prev"

btnContainer.appendChild(prevBtn);
btnContainer.appendChild(nextBtn);