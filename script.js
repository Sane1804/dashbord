const ARROW = document.querySelector(".hide-unhide-arrow-btn");
const BODY = document.querySelector("body");
const NAVBAR_TEXT_CONTAINER = document.querySelectorAll(".navbar-text-container");


const switchClasses = (elem, currentClass, newClass) => {
    elem.classList.toggle(currentClass);
    elem.classList.toggle(newClass);
}


ARROW.addEventListener("click", (e) => {
    let arrowBtn = e.target;
    BODY.classList.toggle("body");
    if (arrowBtn.className === "hide-unhide-arrow-btn"){
        NAVBAR_TEXT_CONTAINER.forEach((elem) => {
            switchClasses(elem, "navbar-text-container", "navbar-text-container-off");
        })
    } else {
        setTimeout(() => {
            NAVBAR_TEXT_CONTAINER.forEach((elem) => {
                switchClasses(elem, "navbar-text-container", "navbar-text-container-off");
            })
        }, 250)
    }
    switchClasses(arrowBtn, "hide-unhide-arrow-btn", "hide-unhide-arrow-btn-pright");  
});


