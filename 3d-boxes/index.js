const pictureContainer = document.querySelector(".body");
const imagesArr = [
    "https://images.unsplash.com/photo-1525220964737-6c299398493c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1725610588095-f117c0e2a921?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1726175938084-16ac3cd61e33?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1673254850293-19e31e837e22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

createImages();
function createImages() {
    for (let i = 0; i < 5; i++) {
        const imageEl = document.createElement("div");
        imageEl.className = `image${i + 1} image`;
        imageEl.style.borderRadius = "80px";
        imageEl.style.backgroundSize = "cover";
        imageEl.style.backgroundImage = `url(${imagesArr[i]})`;
        pictureContainer.appendChild(imageEl);
        imageEl.addEventListener("click",classes)
    }
}

function classes(event) {
    removeclasses();
    const clickedEl = event.target
    clickedEl.classList.toggle("active")
    
}

function removeclasses() {
    imageCon.forEach(element => {
        element.classList.remove("active")
    });
}


const imageCon = document.querySelectorAll(".image")