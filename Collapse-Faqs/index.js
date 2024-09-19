const body = document.body;
const container = document.createElement("div");

container.className = "container";
for (let i = 0; i < 4; i++){
    const newEl = document.createElement("div");
    newEl.className = "faq";
    const questEl = document.createElement("div");
    questEl.textContent = "Why Shouldnt we trust atoms";
    questEl.className = "faq-title";
    const ansEl = document.createElement("p");
    ansEl.className = "faq-text";
    ansEl.textContent = "They Make up Everything";
    const btn = document.createElement("button");
    btn.className = "faq-toggle";
    const btnContent = document.createElement("i");
    btnContent.className = "fas fa-chevron-down";
    btn.appendChild(btnContent);
    newEl.appendChild(questEl);
    newEl.appendChild(ansEl);
    newEl.appendChild(btn);
    container.appendChild(newEl);
}

body.appendChild(container);

const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})