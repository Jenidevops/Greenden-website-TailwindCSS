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

  
    // Simple product search/filter functionality
    document.addEventListener('DOMContentLoaded', function() {
      const searchInput = document.getElementById('search');
      const productContainer = document.getElementById('product-container');
      const productItems = Array.from(productContainer.children);

      searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        productItems.forEach(item => {
          const name = item.querySelector('h2').textContent.toLowerCase();
          if (name.includes(query)) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  