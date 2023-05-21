var preHeader = document.getElementById('preHeader');
var navBar = document.getElementsByTagName("nav")[0];
var is_visible = true;

window.onscroll = function() {
    console.log(navBar)
    if (checkVisible(preHeader)) {
        if (!is_visible) {
            navBar.classList.remove("navSolida")
        }
        is_visible = true;
    } 
    else {
        if (is_visible) {
            navBar.classList.add("navSolida")
        }
        is_visible = false;
    }
}

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }