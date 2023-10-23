/*====================toggle style swicher===================*/
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

/*====================Hide style-switcher on scroll===================*/
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
/*====================Theme color switcher===================*/
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        } 
        else 
        {
            style.setAttribute("disabled","true");
        }
    })
}
/*====================Theme Light and Dark Mode switcher===================*/
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
   const iconElement = dayNight.querySelector("i");

   if (document.body.classList.contains("dark")) {
       iconElement.innerHTML = '<i class="material-symbols-outlined">dark_mode</i>';
   } else {
       iconElement.innerHTML = '<i class="material-symbols-outlined">light_mode</i>';
   }

   document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
   const iconElement = dayNight.querySelector("i");

   if (document.body.classList.contains("dark")) {
       iconElement.innerHTML = '<i class="material-symbols-outlined">light_mode</i>';
   } else {
       iconElement.innerHTML = '<i class="material-symbols-outlined">dark_mode</i>';
   }
});