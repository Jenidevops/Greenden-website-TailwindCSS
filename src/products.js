//selecting side Navbar, Menuicon 
var sideNav = document.getElementById("sidenav");
var menuIcon = document.getElementById("menuicon");
var closeNav = document.getElementById("closenav");

//event listener to open side navbar
menuIcon.addEventListener("click", function() {
    sideNav.style.right = "0";
});
//event listener to close side navbar
closeNav.addEventListener("click", function() {
    sideNav.style.right = "-50%";
});