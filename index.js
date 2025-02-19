const peliculas = [
  {
    titulo: "Tenet",
    duracion: 150,
    genero: "Ciencia Ficción",
    entradas: 20,
    precio: 800,
  },
  {
    titulo: "Interestelar",
    duracion: 220,
    genero: "Ciencia Ficción",
    entradas: 40,
    precio: 950,
  },
  {
    titulo: "Inception",
    duracion: 200,
    genero: "Ciencia Ficción",
    entradas: 100,
    precio: 800,
  },
  {
    titulo: "Batman",
    duracion: 500,
    genero: "Ciencia Ficción",
    entradas: 40,
    precio: 1000,
  },
];

const lista_peliculas = document.getElementById("lista_peliculas");
const formulario = document.getElementById("formulario");
const comprar_btn = document.getElementById("comprar_btn");
const resultado = document.getElementById("resultado");

window.onload = () => {
  comprar_btn.style.display = "none";
  resultado.style.display = "none";

  function loadPeliculas() {
    lista_peliculas.innerHTML = "";
    peliculas.forEach((pelicula) => {
      const item = document.createElement("li");
      item.className = "list-group-item";
      item.textContent = `${pelicula.titulo} - ${pelicula.genero} - ${pelicula.duracion} minutos - $${pelicula.precio} - disponibles: ${pelicula.entradas}`;
      lista_peliculas.appendChild(item);
    });
  }

  loadPeliculas();

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const nombre = data.get("nombre");
    const entradas = data.get("entradas");

    if (!nombre) return alert("Debe ingresar el nombre de la pelicula");
    if (!entradas) return alert("Debe ingresar cuantas entradas desea");

    const pelicula = peliculas.find((pelicula) => pelicula.titulo === nombre);
    const peliculaIndex = peliculas.findIndex(
      (pelicula) => pelicula.titulo === nombre
    );
    const submitter = e.submitter.name;
    let total = 0;

    if (submitter === "consultar") {
      if (!pelicula) return alert("No encontramos esta pelicula :(");
      if (pelicula.entradas < entradas)
        return alert("No hay suficientes entradas");

      total = entradas * pelicula.precio;
      resultado.textContent = `Total a pagar: $${total}`;
      resultado.style.display = "block";
      comprar_btn.style.display = "block";
    }

    if (submitter === "comprar") {
      if (pelicula.entradas < entradas)
        return alert("No hay suficientes entradas");
      pelicula.entradas -= entradas;
      peliculas[peliculaIndex] = pelicula; // guardamos las nuevas entradas
      loadPeliculas();
      resultado.textContent = `Total a pagar: `;
      resultado.style.display = "none";
      comprar_btn.style.display = "none";
      alert("Gracias por su compra! :D");
      e.currentTarget.reset();
    }
  });
};
