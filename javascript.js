var get_nav_h = document.querySelector('.nav');
var out_navo_h_o = (getComputedStyle(get_nav_h).height);
var out_navo_h = parseInt(out_navo_h_o) + parseInt('30') +'px';
console.log(out_navo_h_o)
console.log(out_navo_h)

document.getElementById('nav-o').style.height = (out_navo_h)

var get_h = document.querySelector('.music-margin');
var out_w = (getComputedStyle(get_h).height);

let arr = document.getElementsByClassName('out-w');
for (let i = 0, len = arr.length; i < len; i++) {
    document.getElementsByClassName('out-w')[i].style.width = (out_w)
}
console.log(get_h)
console.log(out_w)
console.log(out_h)

