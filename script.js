let divs = {
  Inomhus: document.getElementById("Inomhus"),
  Utomhus: document.getElementById("Utomhus"),
  Krukväxter: document.getElementById("Krukväxter"),
  Tillbehör: document.getElementById("Tillbehör"),
};
let buttons = {
  Inomhus: document.getElementById("InomhusBtn"),
  Utomhus: document.getElementById("UtomhusBtn"),
  Krukväxter: document.getElementById("KrukväxterBtn"),
  Tillbehör: document.getElementById("TillbehörBtn"),
};

function ShopNav(type) {
  Object.entries(divs).forEach((element) => {
    element[1].style.display = "none";
  });
  type.style.display = "flex";
}

buttons.Inomhus.addEventListener("click", () => ShopNav(Inomhus));
buttons.Utomhus.addEventListener("click", () => ShopNav(Utomhus));
buttons.Krukväxter.addEventListener("click", () => ShopNav(Krukväxter));
buttons.Tillbehör.addEventListener("click", () => ShopNav(Tillbehör));

let Kundvagn = document.getElementsByClassName("knapp");
let targetDiv = document.getElementById("cartTab");

function AddToCart(prize) {
  let newDiv = document.createElement("div");
  newDiv.classList.add("item");
  newDiv.setAttribute("data-prize", prize);
  newDiv.textContent = "hej";
  targetDiv.appendChild(newDiv);
}

for (let knapp of Kundvagn) {
  let prize = knapp.getAttribute("data-prize");
  console.log(knapp);
  knapp.addEventListener("click", () => AddToCart(prize));
}
