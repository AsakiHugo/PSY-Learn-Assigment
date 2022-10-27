const menu_bar = document.querySelector('.menu_bar');
const nav_container = document.querySelector('.nav_container');
const close_btn = document.querySelector('.close_btn');
const scrollUp = document.querySelector('.scrollUp');
const color_panel = document.querySelector('.color_panel');
const change_color = document.querySelector('.change_color');
const scroll_btn = document.querySelector('.scroll_btn');

menu_bar.addEventListener('click', () => {
    nav_container.classList.add ('show');
    close_btn.classList.add ('show');
})

close_btn.addEventListener('click', () => {
    nav_container.classList.remove ('show');
    close_btn.classList.remove ('show');
})

window.addEventListener("scroll", () => {
    if(window.scrollY >= 100) {
        scrollUp.classList.add("show");
    } else {
        scrollUp.classList.remove("show");
    }
})

change_color.addEventListener("click", () => {
    color_panel.classList.toggle("show");
})

document.body.classList.add(localStorage.getItem("ThemeColor"));

let ch_btn = document.querySelectorAll(".ch_btn");
let themes_list = [];

for(let i = 0; i < ch_btn.length; i++) {
    themes_list.push(ch_btn[i].getAttribute("data-color"));

    ch_btn[i].addEventListener("click", () => {
        document.body.classList.remove(...themes_list);
        document.body.classList.add(ch_btn[i].getAttribute("data-color"));
        localStorage.setItem("ThemeColor", ch_btn[i].getAttribute("data-color"))
    }, false)
}
console.log(themes_list)
