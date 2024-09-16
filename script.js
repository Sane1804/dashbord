const ARROW = document.querySelector(".hide-unhide-arrow-btn");

ARROW.addEventListener("click", (e) => {
    let arrowBtn = e.target;
    arrowBtn.classList.toggle("hide-unhide-arrow-btn");
    arrowBtn.classList.toggle("hide-unhide-arrow-btn-pright");
    
});