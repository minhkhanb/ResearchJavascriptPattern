requirejs.config({
  paths: {
    jquery: "./lib/jquery",
    "jquery-color": "./lib/jquery.color",
    "underscore": "./lib/underscore",

    "mobile-menu": "./mobile-menu",
    "scroll-top": "./scroll-top",
    "color": "./color"
  },
});

var mods = ["mobile-menu", "color"];

function getPageHeight() {
  // hàm lấy độ cao thực của trang
  var body = document.body;
  var html = document.documentElement;

  return Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
}

if (getPageHeight() > window.innerHeight * 2) {
  // chỉ load scroll-top cho trang có độ cao đủ lớn
  mods.push("scroll-top");
}

requirejs(mods);
