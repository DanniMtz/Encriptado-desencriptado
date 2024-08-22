
/* <!-- Uso de Selectores --> */

var botonEncriptar = document.querySelector(".boton-encriptar");
var botonDesencriptar = document.querySelector(".boton-desencriptar");
var munieco = document.querySelector(".contenedor-munieco");
var contenedor = document.querySelector(".contenedor-parrafo");
var botoncopiar = document.querySelector(".contenedor-copiar");
var resultado = document.querySelector(".texto-resultado");
var textArea = document.querySelector(".areatexto");

/* llamar las funciones al hacer click*/

botonEncriptar.onclick = encriptar;


function encriptar(){
    const caracteresOK = /^[a-z \n]+$/;
    const esValido = caracteresOK.test(textArea.value); 

    if (esValido){
        const textoEncriptado = encriptarTexto(textArea.value)
        resultado.textContent  = textoEncriptado;
        textArea = "";
        // resultado.style.backgroundImage = "none";
        botonDesencriptar.disabled = false; 
        botoncopiar.disabled = false; 
}
else{
    mensajeDeError('Solo letras, sin acentos ni caracteres especiales y desactiva mayúsculas.');
    textArea.value = "";
    resultado.value = "";
    botonDesencriptar.disabled = true; 
    botoncopiar.disabled = true; 
}
}

//Función para enviar mensaje de error en caso de no cumplir con requisito de ingreso de texto.
function mensajeDeError(mensaje) {
    const error = document.querySelector('#error');
    error.textContent = mensaje;
    error.style.display = 'block';
    setTimeout(() => {
        error.style.display = 'none';
    }, 3000);
}

function encriptarTexto(texto){
    var texto = texto.toLowerCase()
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    alert(`Texto encriptado: ${textoFinal}`);
    return textoFinal;
   

}