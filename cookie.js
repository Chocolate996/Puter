function message1() {
  document.cookie = "message=no; expires=Thu, 18 Dec 2043 12:00:00 GMT";
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

var message = getCookie("message");

if (message == "no") {
  var bgStyle = document.getElementById("message_id");
  bgStyle.style.animationName = "none";
  bgStyle.style.opacity = "0";
} else {
  console.log("message_yes");
}
