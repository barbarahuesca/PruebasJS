
/*Simulacion de Agenda para maquilladora que debe revisar,registrar y/o eliminar turnos*/



let option;
 let tasks = [
   {
      id: 1,
      day: "12/09", 
      costumer : "Maria Eugenia Gonzalez",
      time: "19 Hrs",
      service : "Social"
   },
   {
      id:2,
      day:"15/08",
      costumer: "Sofia Perez",
      time: "14 hrs",
      service: "Artistico"
   },
   {
      id:3,
      day: "17/10",
      costumer: "Norma Novillo",
      time: "15 hrs",
      service: "Artistico"
   },
 ];

 while(option !== 0) {
      option = Number(prompt("Ingrese una opcion:\n1. Agregar Turno\n2. Ver Turnos\n3. Cancelar Turno\n0. Salir "));

      switch (option){
        case 1:
                const costumer = prompt("Ingrese el nombre del cliente 👩");
                const day = prompt(" Ingrese el dia en el que quiere agendar la clase📆: registrar en formato XX/XX");
                const service = prompt("Tipo de maquillaje a realizar: Artistico o Social 💄");
                const time = String(prompt("Indique horario y agregue AM o PM segun corresponda ⌚"));
               const creationId = getLastId() + 1;
               createTask (creationId,costumer, day, service, time,);
         break;
       case 2:
             getAllTasks(); 
            break;
       case 3:
            let deleteId = Number(prompt("Ingrese el ID del turno que desea eliminar: "))   ;
              deleteTask(deleteId);
            break;
        case 0: 
             alert("Gracias, Vuelva pronto 😊");
            break;
        default:
             alert("Dato invalido, por favor intentelo nuevamente 😬");
             break;              
      }
 }

 function createTask( id, costumer, day, service, time){
    tasks.push({
        id,
        costumer,
        day,
        time,
        service,
    });
 }

 function getAllTasks(){
    console.log("\n------------------------------------------\n");
    tasks.forEach((task) => console.log(task.id + " - " + task.costumer + " - "+ task.day + " - "+ "Clases de Maquillaje" +" "+  task.service + " - " + task.time ));
 }

 function deleteTask (id){
    tasks = tasks.filter (task => task.id != id);
 }

 function getLastId() {
    const ids = tasks.map(task => task.id);
    return Math.max(...ids);
 }


