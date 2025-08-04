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
    cargarGoogleAnalytics();
  } else if (decision === "false") {
    window.location.href = "https://www.google.com"; // O la URL que tú decidas
  } else {
    document.getElementById("cookie-banner").style.display = "flex";
  }
};

function aceptarCookies() {
  localStorage.setItem("cookies_aceptadas", "true");
  document.getElementById("cookie-banner").style.display = "none";
  cargarGoogleAnalytics();
}

function rechazarCookies() {
  localStorage.setItem("cookies_aceptadas", "false");
  window.location.href = "https://www.google.com"; // Puedes cambiarlo
}

function cargarGoogleAnalytics() {
  const script1 = document.createElement("script");
  script1.setAttribute("async", "");
  script1.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX");
  document.head.appendChild(script1);

  script1.onload = function () {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', 'G-0247W46NRM');
  };
}