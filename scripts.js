/*Menu Responsivo*/

let show = true;
const menuSection = document.querySelector(".menu-section");
const menuhamburguer = document.querySelector(".menu-hamburguer");


menuhamburguer.addEventListener("click", () => {
    document.body.style.overflow = show ? "hidden" : "initial"
    menuSection.classList.toggle("on", show);
    show = !show;

})