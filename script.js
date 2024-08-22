
/* <!-- Uso de Selectores --> */

var botonEncriptar = document.querySelector(".boton-encriptar");
var botonDesencriptar = document.querySelector(".boton-desencriptar");
var munieco = document.querySelector(".contenedor-munieco");
var contenedor = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");


/* llamar las funciones al hacer click*/

botonEncriptar.onclick = recuperarTexto;


function recuperarTexto(){
    var cajatexto = document.querySelector(".areatexto")
    cajatexto.value
   
    alert (`Texto: ${cajatexto.value} `);
}