var menuburgeropen = document.getElementsByClassName('menus-burger-open')[0];
var menuburgerclose = document.getElementsByClassName('menus-burger-close')[0];



menuburgeropen.onclick = function() {
    menuburgeropen.style.display="none"
    document.getElementsByClassName('menus-burger-close')[0].style.display="block"
    document.getElementsByClassName('menus-mobile')[0].style.display="block"
}

menuburgerclose.onclick = function() {
    document.getElementsByClassName('menus-burger-close')[0].style.display="none"
    document.getElementsByClassName('menus-burger-open')[0].style.display="block"
    document.getElementsByClassName('menus-mobile')[0].style.display="none"
}

