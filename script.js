// Seleccionamos todos los botones de las tarjetas
const buyButtons = document.querySelectorAll(".buyBtn");
const form = document.getElementById("contactForm");

// Función para los botones de compra
buyButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    const modelo = e.target.getAttribute("data-name");
    alert(`¡${modelo} agregado al carrito! 🛒`);
  });
});

// Función para el formulario de contacto
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Gracias por contactarnos 👟");
  form.reset();
});