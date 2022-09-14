class ClaseDeMaquillaje {
   constructor(titulo, imagen, duracion) {
       this.titulo = titulo;
       this.imagen = imagen;
       this.duracion = duracion;
   }
}

const ClasesDeMaquillaje = [
   new ClaseDeMaquillaje("Clases de Maquillaje Social", "./imagenes/galeria2.jpeg ", "5 Meses"),
   new ClaseDeMaquillaje("Clases de Maquillaje Artistico", "./imagenes/galeria9.jpeg", "7 Meses"),
];

function MostrarClases(ClasesDeMaquillaje) {
   const contenedorDeClases = document.getElementById("contenedor-de-clases");
   contenedorDeClases.innerHTML = "";

   ClasesDeMaquillaje.forEach((ClaseDeMaquillaje) => {
       const divClaseDeMaquillaje = document.createElement("div");
       divClaseDeMaquillaje.innerHTML = `
          <img src= "${ClaseDeMaquillaje.imagen}" alt=${ClaseDeMaquillaje.titulo};>
          <h3>${ClaseDeMaquillaje.titulo}</h3>
          <p> Duracion: ${ClaseDeMaquillaje.duracion} </p>
       `;

       // Primero debe agregarse el contenedor al html antes de poder agregarle clases
       contenedorDeClases.appendChild(divClaseDeMaquillaje);

       divClaseDeMaquillaje.classList.add("claseDeMaquillaje");

       //  divClaseDeMaquillaje.classlist.add("ClaseDeMaquillaje");

       //----------
       //   const botonVerDetalle = crearBotonVerDetalle(ClaseDeMaquillaje);
       //   divClaseDeMaquillaje.appendChild(botonVerDetalle);
       //----------
   });
}
MostrarClases(ClasesDeMaquillaje);