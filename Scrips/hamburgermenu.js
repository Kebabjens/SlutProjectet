let hamburger = document.getElementById("hamburger");
let nav = document.getElementById("ul");
let header = document.getElementById("header");
console.log(nav.style.fontSize);
function hamburgerMenu() {
  console.log(nav.style.display);
  if (nav.style.display === "none") {
    nav.style.display = "flex";
    header.style.height = "100%";
  } else {
    nav.style.display = "none";
    header.style.height = "90px";
  }
}
hamburger.addEventListener("click", () => hamburgerMenu());
