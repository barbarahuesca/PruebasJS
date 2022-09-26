//* Agenda personalizada para cada clienta  *//


class Turno {
   constructor(nombre, numero, tipo, dia,hora) {
     this.nombre = nombre;
     this.numero = numero;
     this.tipo = tipo;
     this.dia = dia;
     this.hora = hora;
   }
}

let nombreUsuario;

document.getElementById("formulario-usuario").addEventListener("submit", manejadorFormularioUsuario);
 
function manejadorFormularioUsuario(e) {
   console.log(e);
   e.preventDefault();
   nombreUsuario = document.getElementById("user").value;
 
   const listadodeTurnos= document.getElementById("listadodeTurnos");
   const turnos = JSON.parse(localStorage.getItem(nombreUsuario));
 
   if (turnos == null) {
      swal("Agenda Vacia", "No hay ningun turno registrado para este cliente", "error");
    } else {
      swal("Agenda Abierta", "Este cliente cuenta con turnos ya registrados", "success");
      mostrarTurnos(turnos);
    }
    mostrarPanel();
}
 
function mostrarTurnos(turnos) {
   let listadodeTurnos = document.getElementById("listadodeTurnos");
   listadodeTurnos.innerHTML = "";
 
   turnos.forEach(turno => {
     let li = document.createElement("li");
     li.innerHTML = `
     <hr> ${turno.nombre.toUpperCase()} - ${turno.numero} - 
     ${turno.tipo} - ${turno.dia} - ${turno.hora}
     `;
     const botonBorrar = crearBotonEliminar(turno);
     li.appendChild(botonBorrar);
     listadodeTurnos.appendChild(li);
   });
}
 
function crearBotonEliminar(turno){
   const botonBorrar = document.createElement("button");// <button>Borrar</button>
     botonBorrar.innerText = "Borrar";
     botonBorrar.addEventListener("click", () => {
       swal("Agenda Vacia", "No hay ningun turno registrado para este cliente", "error")
       eliminarTurno(turno);
     })
     return botonBorrar;
}
 
function mostrarPanel() {
   const opciones = document.getElementById("opciones");
 
   opciones.innerHTML =
     `<h3>Agenda de turnos para ${nombreUsuario}</h3>
     <form id="formulario-turno">
       <input type="text" id="nombre" placeholder="Apellido">
       <input type="number" id="numero" placeholder="Numero de Clase">
       <input type="text" id="tipo" placeholder="Tipo de Maquillaje">
       <input type="text" id="dia" placeholder="Dia">
       <input type="text" id="hora" placeholder="Hora">
       <button type="submit">Agregar turno</button>
     </form>`;
 
   document.getElementById("formulario-turno").addEventListener("submit", agregarTurno);
}

 
function validarCampos(turno) {
   if(turno.nombre == ""){
     alert("El nombre no puede ser vacio")
   }
}
 
function agregarTurno(e) {
   e.preventDefault();
   const nombre = document.getElementById("nombre").value;
   const numero = document.getElementById("numero").value;
   const tipo = document.getElementById("tipo").value;
   const dia = document.getElementById("dia").value;
   const hora = document.getElementById("hora").value;
 
   const turno = new Turno (nombre, numero, tipo, dia,hora);
 
   validarCampos(turno)
 
   const turnosEnLocalStorage = JSON.parse(localStorage.getItem(nombreUsuario));
 
   // 1) me traigo las cosas que necesito del locaslStorage
   // 2) Agregago mi cosa
   // 3) vuelvo a subir al localStorage.
 
   if (turnosEnLocalStorage == null) {
     localStorage.setItem(nombreUsuario, JSON.stringify([turno]));
     mostrarTurnos([turno]);
   } else {
     turnosEnLocalStorage.push(turno);
     localStorage.setItem(nombreUsuario, JSON.stringify(turnosEnLocalStorage));
     mostrarTurnos(turnosEnLocalStorage);
   }
   e.target.reset();
}
 
function eliminarTurno(turno) {
   const turnosEnLocalStorage = JSON.parse(localStorage.getItem(nombreUsuario));
   const nuevoArray = turnosEnLocalStorage.filter(item => item.nombre != turno.nombre);
   localStorage.setItem(nombreUsuario, JSON.stringify(nuevoArray));
   mostrarTurnos(nuevoArray);
}
