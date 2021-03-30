const mobileMenu = document.querySelector(".menu-mobile");
const nav = document.querySelector(".header-navigation");

mobileMenu.addEventListener("click", function (e) {
  let current = e.target.classList;

  if (current.contains("menu-open")) {
    current.remove("menu-open");
    nav.style.display = "none";
  } else {
    current.add("menu-open");
    nav.style.display = "block";
  }
});
