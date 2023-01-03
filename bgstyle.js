function setCookie() {
  document.cookie = "bg=Unsplash; expires=Thu, 18 Dec 2043 12:00:00 GMT";
}

function delCookie() {
  document.cookie = "bg=Unsplash; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}

function setBg1() {
  document.cookie = "bg=Unsplash_girl; expires=Thu, 18 Dec 2043 12:00:00 GMT";
}

function setBg2() {
  document.cookie =
    "bg=Unsplash_natural; expires=Thu, 18 Dec 2043 12:00:00 GMT";
}

function setBg3() {
  document.cookie = "bg=Unsplash_car; expires=Thu, 18 Dec 2043 12:00:00 GMT";
}

function setBg4() {
  document.cookie = "bg=Unsplash_sport; expires=Thu, 18 Dec 2043 12:00:00 GMT";
}

function setBg5() {
  document.cookie = "bg=Unsplash_animal; expires=Thu, 18 Dec 2043 12:00:00 GMT";
}

function getCookie(name) {
  if (document.cookie.length > 0) {
    start = document.cookie.indexOf(name + "=");
    if (start != -1) {
      start = start + name.length + 1;
      end = document.cookie.indexOf(";", start);
      if (end == -1) end = document.cookie.length;
      return decodeURIComponent(document.cookie.substring(start, end));
    }
  }
  return "";
}

var get = getCookie("bg");

if (get == "Unsplash") {
  console.log("Unsplash");
  var bgStyle = document.getElementById("bg_img");
  bgStyle.style.backgroundImage =
    "url(https://source.unsplash.com/random/2560x1440)";
  var nowbg = "Unsplash";
} else if (get == "Unsplash_girl") {
  console.log("Unsplash1");
  var bgStyle = document.getElementById("bg_img");
  bgStyle.style.backgroundImage =
    "url(https://source.unsplash.com/2560x1440/?encryption,girl)";
  var nowbg = "specificUnsplash";
} else if (get == "Unsplash_natural") {
  console.log("Unsplash2");
  var bgStyle = document.getElementById("bg_img");
  bgStyle.style.backgroundImage =
    "url(https://source.unsplash.com/2560x1440/?encryption,natural)";
  var nowbg = "specificUnsplash";
} else if (get == "Unsplash_car") {
  console.log("Unsplash3");
  var bgStyle = document.getElementById("bg_img");
  bgStyle.style.backgroundImage =
    "url(https://source.unsplash.com/2560x1440/?encryption,car)";
  var nowbg = "specificUnsplash";
} else if (get == "Unsplash_sport") {
  console.log("Unsplash4");
  var bgStyle = document.getElementById("bg_img");
  bgStyle.style.backgroundImage =
    "url(https://source.unsplash.com/2560x1440/?encryption,sport)";
  var nowbg = "specificUnsplash";
} else if (get == "Unsplash_animal") {
  console.log("Unsplash5");
  var bgStyle = document.getElementById("bg_img");
  bgStyle.style.backgroundImage =
    "url(https://source.unsplash.com/2560x1440/?encryption,animal)";
  var nowbg = "specificUnsplash";
} else {
//   console.log("Bing");
//   var nowbg = "Bing";
    var bgStyle = document.getElementById("bg_img");
  bgStyle.style.backgroundImage =
    "url(https://source.unsplash.com/2560x1440/?encryption,birthday)";
  var nowbg = "specificUnsplash";
}

if (nowbg == "Unsplash") {
  document.getElementById("outbg1").style.backgroundColor =
    "rgba(255, 255, 255, 0.50)";
  console.log("1");
} else if (nowbg == "specificUnsplash") {
  document.getElementById("outbg2").style.backgroundColor =
    "rgba(255, 255, 255, 0.50)";
  console.log("2");
} else if (nowbg == "Bing") {
  document.getElementById("outbg3").style.backgroundColor =
    "rgba(255, 255, 255, 0.50)";
  console.log("3");
} else {
  console.log("impossible");
}
