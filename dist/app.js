// Modal window and its dependencies
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close");

// Create and delete image inside modal window
function createImage(target) {
    return new Promise((resolve, reject) => {
        const image = target.firstChild.cloneNode(true);
        modal.appendChild(image);
    })
    resolve();
}

function removeImage() {
    modal.firstElementChild.remove();
}

// Modal window opening and closing functions
function openModal() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    close.classList.remove("hidden");
}

function closeModal() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    close.classList.add("hidden");
}


// ========== Site Functionality ==========

// Open modal window when image is clicked
let topgrid = document.querySelector(".topgrid__grid").children;

for(let element of topgrid) {
    element.addEventListener("click", (e) => {
        createImage(element).then(openModal());
        
        e.preventDefault();
    })
}

// Close modal window when clicked on cross icon
document.querySelector(".close").addEventListener("click", (e) => {
    closeModal();
    removeImage();
    e.preventDefault();
})