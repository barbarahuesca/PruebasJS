class ClaseDeMaquillaje {
   constructor(titulo, identificador, imagen, duracion, descripcion,precio, ) {
       this.titulo = titulo;
       this.identificador = identificador;
       this.imagen = imagen;
       this.duracion = duracion;
       this.descripcion = descripcion;
       this.precio = precio;
      
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
   ),
   new ClaseDeMaquillaje(
       "Clases de Maquillaje Artistico",
       "maquillaje-artistico",
       "./imagenes/galeria9.jpeg",
       "7 Meses",
       "En este curso de cuatro meses, aprenderas a como realizarte maquillajes artisticos, destinados usualmente para shows, espectaculos,muestras,sesiones de fotos y demas. La idea es que aprendas muchas tecnicas y combinacion de colores. En este curso se apela mucho a la creatividad y la imaginacion. Vamos a crear y jugar mucho con colores, delineados, pestañas, labiales y demas. IMPORTANTE: se espera tener conocimientos minimos de maquillaje para un mejor aprendizaje",
       "$50.000",

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
 

   });
}

function mostrarClases(arrayClases) {
   const contenedorDeClases = document.getElementById("contenedor-de-clases");
   contenedorDeClases.innerHTML = "";
   arrayClases.forEach((clase) => {
     const divClaseDeMaquillaje = document.createElement("div");
     //ACA ABAJO LE AGREGO EL DIV CON LA DESCRIPCION ESTE VA ESTAR OCULTO POR LA CLASE VISIBLE QUE TIENE UN DISPLAY NONE, TMB LE DOI UN NOMBRE AL DIV CON EL IDENTIFICADOR PARA JUSTAMENTE PODER IDENTIFICARLO 
     divClaseDeMaquillaje.innerHTML = `
       <div class="contenido-${clase.identificador}">
            <img src= "${clase.imagen}" alt=${clase.titulo};>
             <h3>${clase.titulo}</h3>
             <div class="div-${clase.identificador} visible">
             <p> Descripcion: ${clase.descripcion} </p>
             </div>
            <p> Duracion: ${clase.duracion} </p>
            <button id="mostrarDetalle${clase.identificador}" class=boton-ver-detalle"> Ver Detalle/ Ver Menos</button>
         </div>
       `;
     contenedorDeClases.appendChild(divClaseDeMaquillaje);
   });
 }

 mostrarClases(clasesDeMaquillaje);

 document.addEventListener("click", (e) => {
   if (e.target.matches("#mostrarDetallemaquillaje-social")) {
     //ACA SELECCIONO EL DIV CON EL NOMBRE DEL IDENTIFICADOR Q YA LE HABIA DADO
     let div1 = document.querySelector(".div-maquillaje-social");
     //ACA CON TOGGLE LO Q HACE ES QUE CADA VEZ Q LE DEN CLICK  LE SACA O LE PONE LA CLASE VISIBLE
     div1.classList.toggle("visible");
   }
 
   if (e.target.matches("#mostrarDetallemaquillaje-artistico")) {
     //ACA LOS MISMO PERO CON LA DE MAQUILLAJE ARTISTICO
     let div2 = document.querySelector(".div-maquillaje-artistico");
     div2.classList.toggle("visible");
   }
 });

