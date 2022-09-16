class ClaseDeMaquillaje {
   constructor(titulo, identificador, imagen, duracion, descripcion,precio, link) {
       this.titulo = titulo;
       this.identificador = identificador;
       this.imagen = imagen;
       this.duracion = duracion;
       this.descripcion = descripcion;
       this.precio = precio;
       this.link = link;
   }
}

const clasesDeMaquillaje = [
   new ClaseDeMaquillaje(
       "Clases de Maquillaje Social",
       "maquillaje-social",
       "./imagenes/galeria2.jpeg",
       "5 Meses",
       "Este curso consta de cuatro meses, en el que aprenderás un monton de tecnicas y tips para aprender a maquillarte en tu dia a dia, asi como tambien para algun evento o cumpleaños. Con una clase semanal de 2 horas, se vera el preparado de piel necesario, asi como tambien que tipos de productos son recomentables a corde al tipo de rostro y piel con el que cuenta cada una. Dependiendo varios factores, se definira los tipos de colores que resaltan para vos misma, estilos y tecnicas adaptados 100% a vos!",
       "$30.000",
       "https://www.youtube.com/embed/klXwGZ5iNaE",
   ),
   new ClaseDeMaquillaje(
       "Clases de Maquillaje Artistico",
       "maquillaje-artistico",
       "./imagenes/galeria9.jpeg",
       "7 Meses",
       "En este curso de cuatro meses, aprenderas a como realizarte maquillajes artisticos, destinados usualmente para shows, espectaculos,muestras,sesiones de fotos y demas. La idea es que aprendas muchas tecnicas y combinacion de colores. En este curso se apela mucho a la creatividad y la imaginacion. Vamos a crear y jugar mucho con colores, delineados, pestañas, labiales y demas. IMPORTANTE: se espera tener conocimientos minimos de maquillaje para un mejor aprendizaje",
       "$50.000",
       "https://www.youtube.com/embed/KH-kVuu_fp8",
   ),
];

function mostrarClases(arrayClases) {
   const contenedorDeClases = document.getElementById("contenedor-de-clases");
   contenedorDeClases.innerHTML = "";

   arrayClases.forEach((clase) => {
       const divClaseDeMaquillaje = document.createElement("div");
       divClaseDeMaquillaje.innerHTML = `
      <div class="contenido">
           <img src= "${clase.imagen}" alt=${clase.titulo};>
            <h3>${clase.titulo}</h3>
           <p> Duracion: ${clase.duracion} </p>
           <button id="mostrarDetalle${clase.identificador}" class=boton-ver-detalle"> Ver Detalle</button>
        </div>
      `;
       contenedorDeClases.appendChild(divClaseDeMaquillaje);

       let boton = document.getElementById(`mostrarDetalle${clase.identificador}`);
       boton.addEventListener("click", () => mostrarDetalle(clase));
   });
}

function mostrarDetalle(clase) {
   const contenedorDeClases = document.getElementById("clase-individual");
   contenedorDeClases.innerHTML = "";

   clase.forEach((ClaseDeMaquillaje) => {
       const divClaseDeMaquillaje = document.createElement("div");
       divClaseDeMaquillaje.innerHTML = `
      <div class="contenido">
             <img src= "${ClaseDeMaquillaje.imagen}" alt=${ClaseDeMaquillaje.titulo};>
            <h3>${ClaseDeMaquillaje.titulo}</h3>
             <p> Descripcion: ${ClaseDeMaquillaje.descripcion} </p>
             <p> Duracion: ${ClaseDeMaquillaje.duracion} </p>

             <h4> Precio: ${ClaseDeMaquillaje.precio} </h4>
             <button id="VerMenos${ClaseDeMaquillaje.id2}" class=boton-ver-menos"> Ver Menos</button>
           </div>
      `;
       contenedorDeClases.appendChild(divClaseDeMaquillaje);

       let boton = document.getElementById(`MostrarClases${ClaseDeMaquillaje.id2}`);
       boton.addEventListener("click", () => mostrarClases(ClaseDeMaquillaje.id2));
   });
}
mostrarClases(clasesDeMaquillaje);
