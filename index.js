
/* simulacion de compra en una pagina de maquillaje. le solicitamo al cliente que ingrese el tipo y cantidad de productos 
que desea adquirir   */

function nombreProducto (){
    let nombreIngresado = prompt (" Ingresar nombre del producto que quiere adquirir");
    alert ("Usted a solicitado el producto" +" "+ nombreIngresado)
    let cantidades = prompt ("Porfavor indique la cantidad de unidades que desea adquirir");
    alert("Usted a solicitado" + " " + cantidades + " " + "unidades")
    let mensaje = ("Sumamos a su carrito" + " " + cantidades + " " + "unidad/es del prodcuto"+ " "+ nombreIngresado );
    console.log (mensaje)
}

nombreProducto();
nombreProducto();
nombreProducto();
console.log ("Usted esta llevando 3 tipos de productos")

let entrada2 = prompt ("Desea agregar mas productos a su carrito? Indique SI o NO");
if ((entrada2 == "si") || (entrada2 == "SI")){
    alert ("Aguarde unos segundos, se esta abriendo nuevamente su carrito");

} else if ((entrada2 == "no") || (entrada2 == "NO")){
    alert ("Aguarde unos segundos, se esta abriendo la pestaña para ir a abonar")
} else {
    alert ("Usted no ha ingresado un dato valido")
}

 


