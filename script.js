const ARROW = document.querySelector(".hide-unhide-arrow-btn");
const BODY = document.querySelector("body");

ARROW.addEventListener("click", (e) => {
    let arrowBtn = e.target;
    arrowBtn.classList.toggle("hide-unhide-arrow-btn");
    arrowBtn.classList.toggle("hide-unhide-arrow-btn-pright");
    BODY.classList.toggle("body");
    console.log(BODY);
});