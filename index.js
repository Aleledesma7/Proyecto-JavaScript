// Punto 1: Variables, constantes y arrays //
const peliculas = ["Tenet", "Interestelar", "Inception", "Batman"];
const precioEntrada = 800;
let entradasDisponibles = 20;

// Funcion para mostrar peliculas //
function mostrarPeliculas() {
    console.log("Películas disponibles:");
    peliculas.forEach((pelicula, index) => console.log(`${index + 1}. ${pelicula}`));
}

// Funcion para comprar //
function comprarEntradas() {
    mostrarPeliculas();
    const eleccion = parseInt(prompt("Ingresa el numero de la pelicula que queres ver:"));
    
    if (eleccion < 1 || eleccion > peliculas.length) {
        alert("Elección invalida, intente de nuevo.");
        return;
    }

    const peliculaSeleccionada = peliculas[eleccion - 1];
    const cantidad = parseInt(prompt(`¿Cuántas entradas quiere para"${peliculaSeleccionada}"?`));

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("El minimo es de una entrada!");
        return;
    }

    if (cantidad > entradasDisponibles) {
        alert("No hay suficientes entradas disponibles.");
        return;
    }

    const total = cantidad * precioEntrada;

    // Confirm y alert //
    const confirmarCompra = confirm(`El costo total es $${total}. ¿Confirmar la compra?`);

    if (confirmarCompra) {
        entradasDisponibles -= cantidad;
        alert(`Compra realizada!, entradas restantes: ${entradasDisponibles}`);
        console.log("Compra confirmada: ${cantidad} entradas para ${peliculaSeleccionada}.");
    } else {
        alert("Compra cancelada.");
    }
}

// Promesa //
function procesarCompra() {
    return new Promise((resolve) => {
        alert("Procesando su compra, por favor espere...");
        setTimeout(() => {
            resolve();
        }, 2000); 
    });
}

// Inciar simulador //
function iniciarSimulador() {
    let continuar = true;

    while (continuar) {
        comprarEntradas();
        continuar = confirm("Quiere hacer otra compra?");
    }

    alert("Gracias por su visita!");
}

iniciarSimulador();
