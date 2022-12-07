//nav高度
var get_nav_h = parseFloat(getComputedStyle(document.querySelector(".nav")).height) + parseFloat("30") + "px";
document.getElementById("nav-o").style.height = (get_nav_h)

//mark样式
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate")
      observer.unobserve(entry.target)
    }
  })
})

document.querySelectorAll("mark").forEach(mark => {
  observer.observe(mark)
})


//music长宽
var get_h = document.querySelector(".download-margin");
var out_w = (getComputedStyle(get_h).height);

let arr1 = document.getElementsByClassName("out-w");
for (let i = 0, len = arr1.length; i < len; i++) {
  document.getElementsByClassName("out-w")[i].style.width = (out_w)
  document.getElementsByClassName("out-w")[i].style.height = (out_w)
}

let arr2 = document.getElementsByClassName("egg");
for (let i = 0, len = arr2.length; i < len; i++) {
  document.getElementsByClassName("egg")[i].style.width = (out_w)
  document.getElementsByClassName("egg")[i].style.height = (out_w)
}

//bluebox宽度
var get_bluebox_w = parseFloat(getComputedStyle(document.querySelectorAll(".bluebox")[1]).width);
var get_bluebox_content_w_1 = parseFloat(getComputedStyle(document.querySelectorAll(".bluebox-code-content")[0]).width);
var get_bluebox_content_h_1 = parseFloat(getComputedStyle(document.querySelectorAll(".bluebox-code-content")[0]).height);
var get_bluebox_content_w_2 = parseFloat(getComputedStyle(document.querySelectorAll(".bluebox-code-content")[1]).width);
var get_bluebox_content_h_2 = parseFloat(getComputedStyle(document.querySelectorAll(".bluebox-code-content")[1]).height);

var out_bluebox_code_w = (get_bluebox_content_w_1) + (get_bluebox_content_w_2) + parseFloat("5") + "px";
var out_bluebox_code_outside_w = (get_bluebox_content_w_1) + "px";
var out_bluebox_code_outside_w_hover = (get_bluebox_content_w_2) + "px";
var out_bluebox_code_outside_h = (get_bluebox_content_h_1) + "px";
var out_bluebox_code_outside_h = (get_bluebox_content_h_1) + "px";
var out_bluebox_code_left = -((get_bluebox_content_w_1) + parseFloat("5")) + "px";
document.documentElement.style.setProperty('--bluebox-code-outside-w', out_bluebox_code_outside_w);
document.documentElement.style.setProperty('--bluebox-code-outside-w-hover', out_bluebox_code_outside_w_hover);
document.documentElement.style.setProperty('--bluebox-code-left-hover', out_bluebox_code_left);
let arr3 = document.getElementsByClassName("bluebox-code");
for (let i = 0, len = arr3.length; i < len; i++) {
  document.getElementsByClassName("bluebox-code")[i].style.width = (out_bluebox_code_w);
  document.getElementsByClassName("bluebox-code-outside")[i].style.height = (out_bluebox_code_outside_h);
}