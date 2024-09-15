const container = document.querySelector(".container")
console.log(container)
for (let i = 0; i < 4; i++){
    const circleEl = document.createElement("div")
    circleEl.className = `circle${i + 1} circle`
    circleEl.textContent = `${i+1}`
    container.appendChild(circleEl)
}

const progressBar = document.createElement("div")
progressBar.className = "progress"
container.appendChild(progressBar)
