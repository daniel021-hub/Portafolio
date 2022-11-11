const iconMenu= document.querySelector(".icon_menu");
const menu= document.querySelector(".menu");

iconMenu.addEventListener("click", function(){
    console.log(menu.classList.toggle("menu menu_show"));
});