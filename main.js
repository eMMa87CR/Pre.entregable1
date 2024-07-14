alert("Bienvenid@ a Farmacia Roca");

const Productos = [
  "1. Paracetamol",
  "2. Ibuprofeno",
  "3. Amoxicilina",
  "4. Aspirina",
  "5. Loratadina",
  "6. Insulina",
  "7. Metformina",
  "8. Omeprazol",
];

const Precios = [100, 150, 200, 50, 80, 500, 300, 120];

let carrito = [];

//Lista de productos
function mostrarProductos() {
  let lista = "Lista de productos:\n\n";
  for (let i = 0; i < Productos.length; i++) {
    lista += Productos[i] + " - $" + Precios[i] + "\n";
  }
  alert(lista);
}

//Agregar productos al carrito
function agregarAlCarrito() {
  let productoElegido = prompt(
    "Ingrese el número del producto que desea agregar al carrito:"
  );
  productoElegido = parseInt(productoElegido) - 1; 
  if (productoElegido >= 0 && productoElegido < Productos.length) {
    carrito.push({
      nombre: Productos[productoElegido],
      precio: Precios[productoElegido],
    });
    alert(
      Productos[productoElegido].split(". ")[1] +
        " ha sido agregado al carrito."
    );
  } else {
    alert("Selección inválida. Por favor, intente de nuevo.");
  }
}

function mostrarCarrito() {
  if (carrito.length === 0) {
    alert("El carrito está vacío.");
  } else {
    let contenido = "Productos en el carrito:\n\n";
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
      contenido += carrito[i].nombre + " - $" + carrito[i].precio + "\n";
      total += carrito[i].precio;
    }
    contenido += "\nTotal: $" + total;
    alert(contenido);
  }
}

function realizarCompra() {
  if (carrito.length === 0) {
    alert("No hay productos en el carrito para comprar.");
  } else {
    let total = carrito.reduce((sum, item) => sum + item.precio, 0);
    let confirmacion = confirm(
      "El total de su compra es $" + total + ". ¿Desea proceder con la compra?"
    );
    if (confirmacion) {
      alert("¡Gracias por su compra!");
      carrito = [];
    } else {
      alert("Compra cancelada.");
    }
  }
}

function iniciarTienda() {
  while (true) {
    let opcion = prompt(
      "Elige una opción:\n1. Ver productos\n2. Agregar al carrito\n3. Ver carrito\n4. Realizar compra\n5. Salir"
    );

    switch (opcion) {
      case "1":
        mostrarProductos();
        break;
      case "2":
        agregarAlCarrito();
        break;
      case "3":
        mostrarCarrito();
        break;
      case "4":
        realizarCompra();
        break;
      case "5":
        alert("Gracias por visitar Farmacia Roca. ¡Hasta pronto!");
        return;
      default:
        alert("Opción inválida. Por favor, intente de nuevo.");
    }
  }
}

iniciarTienda();
