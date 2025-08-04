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