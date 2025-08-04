let carrito = [];
let total = 0;

function agregarAlCarrito(producto, precio) {
  carrito.push({ producto, precio });
  total += precio;
  actualizarCarrito();
}

function actualizarCarrito() {
  document.getElementById("lista-carrito").innerHTML = "";
  carrito.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = '${item.producto} - $$ {item.precio}';
    document.getElementById("lista-carrito").appendChild(li);
  });

  document.getElementById("total").textContent = total;
  document.getElementById("contador").textContent = carrito.length;
}

document.getElementById("carrito-btn").addEventListener("click", () => {
  const carritoBox = document.getElementById("carrito");
  carritoBox.style.display = carritoBox.style.display === "block" ? "none" : "block";
});

function cerrarCarrito() {
  document.getElementById("carrito").style.display = "none";
} 

  window.onload = function () {
    const decision = localStorage.getItem("cookies_aceptadas");

    if (decision === "true") {
      // Usuario aceptó, todo sigue normal
    } else if (decision === "false") {
      // Usuario rechazó, redirigirlo
      window.location.href = "https://www.google.com"; // O la página que tú elijas
    } else {
      // No ha elegido aún → mostrar el banner
      document.getElementById("cookie-banner").style.display = "flex";
    }
  };

  function aceptarCookies() {
    localStorage.setItem("cookies_aceptadas", "true");
    document.getElementById("cookie-banner").style.display = "none";
    // El usuario se queda en el sitio
  }

  function rechazarCookies() {
    localStorage.setItem("cookies_aceptadas", "false");
    // Redirige inmediatamente
    window.location.href = "https://www.google.com"; // O cambia la URL por la que tú quieras
  }
