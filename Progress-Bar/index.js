const container = document.querySelector(".container");
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




//Buttons Functionality
let currentActive = 1;


nextBtn.addEventListener("click", () => {
    currentActive++;
    if (currentActive > 4) {
        currentActive = 4;
    }
    updateProgress();
});
prevBtn.addEventListener("click", () => {
    currentActive--;
    if (currentActive <= 0) {
        currentActive = 1;
    }
    updateProgress();
});


const circles = document.querySelectorAll(".circle");


function updateProgress() {
    circles.forEach((circle, abc) => {
        if (abc < currentActive) {
            circle.classList.add("active")
        } else {
            circle.classList.remove("active")
        }
    });
    if (currentActive === 2) {
        progressBar.style.width = `100px`
    } else if (currentActive === 3) {
        progressBar.style.width = `220px`
    }
    else if(currentActive === 4) {
        progressBar.style.width = `360px`
    } else {
        progressBar.style.width = `0px`
        
    }
}
