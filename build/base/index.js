$(function () {
  AOS.init();
});

window.onscroll = function () {
  myFunction();
};
function myFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    console.log("HEEEEJ");
    document.querySelector("header").style.opacity = "1";
    document.querySelector("#desktop-logo").classList.add("logo-shrink");
    document.querySelector(".clearfix").classList.add("head-shrink");
    document.querySelector(".top-nav").classList.add("top-nav-hide");
  } else {
    document.querySelector("header").style.opacity = ".9";
    document.querySelector("#desktop-logo").classList.remove("logo-shrink");
    document.querySelector(".clearfix").classList.remove("head-shrink");
    document.querySelector(".top-nav").classList.remove("top-nav-hide");
  }
}

/* 
function myFunction() {
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  var elem = document.getElementById("main");

  if (scrollTop > 0 && scrollTop < 101) {
    elem.className = "scrolled5";
  } else if (scrollTop > 100 && scrollTop < 201) {
    elem.className = "scrolled6";
  } else if (scrollTop > 200 && scrollTop < 301) {
    elem.className = "scrolled2";
  } else if (scrollTop > 300 && scrollTop < 401) {
    elem.className = "scrolled3";
  } else if (scrollTop > 400 && scrollTop < 501) {
    elem.className = "scrolled4";
  } else {
    elem.className = "site-main";
  }
}

$(window).on("load", function () {
  $(".loadingScreen").fadeOut("slow");
});
  */
console.log("Ola");
