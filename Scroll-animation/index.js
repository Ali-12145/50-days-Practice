const body = document.body;
const h1 = document.createElement("div");
h1.textContent  = "Scroll for Animation"
for (let i = 0; i < 10; i++){
    const boxEl = document.createElement("div");
    boxEl.className = "box";
    boxEl.textContent = "Content"
    body.appendChild(boxEl);
}

const boxes = document.querySelectorAll(".box");
window.addEventListener("scroll", checkBoxes);


function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    console.log(triggerBottom);

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        console.log(boxTop);
        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}