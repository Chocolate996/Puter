//nav高度
var get_nav_h = document.querySelector('.nav');
var out_navo_h_o = (getComputedStyle(get_nav_h).height);
var out_navo_h = parseInt(out_navo_h_o) + parseInt('30') + 'px';

document.getElementById('nav-o').style.height = (out_navo_h)


//mark样式
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate')
      observer.unobserve(entry.target)
    }
  })
})

document.querySelectorAll('mark').forEach(mark => {
  observer.observe(mark)
})


//music长宽
var get_h = document.querySelector('.download-margin');
var out_w = (getComputedStyle(get_h).height);

let arr = document.getElementsByClassName('out-w');
for (let i = 0, len = arr.length; i < len; i++) {
  document.getElementsByClassName('out-w')[i].style.width = (out_w)
  document.getElementsByClassName('out-w')[i].style.height = (out_w)
}

let arr1 = document.getElementsByClassName('egg');
for (let i = 0, len = arr1.length; i < len; i++) {
  document.getElementsByClassName('egg')[i].style.width = (out_w)
  document.getElementsByClassName('egg')[i].style.height = (out_w)
}
