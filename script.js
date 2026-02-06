const buyBtn = document.getElementById("buyBtn");
const form = document.getElementById("contactForm");

buyBtn.addEventListener("click", () => {
  alert("Producto agregado al carrito 🛒");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Gracias por contactarnos 👟");
  form.reset();
});
