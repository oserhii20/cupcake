
//Header Fix
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.getElementById("headerfix").style.position = "fixed";
  } else {
    document.getElementById("headerfix").style.position = "relative";
  }
}
