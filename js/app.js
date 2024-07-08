//Declaramos variables
let textoUsuario = "";
let textoDesencriptado = "";
let value = "";

//Inicializamos el diseño quitando el diseño del texto cuando ya fue encriptado
document.getElementById("SiEncriptado").style.display = "none";

//para desencriptar
let palabrasClaves = [/enter/g,/imes/g,/ai/g,/ober/g,/ufat/g];//palabras clave
let palabrasReemplazo = ["e","i","a","o","u"];//palabras de reemplazo

//para encriptar
let palabrasClave2 = ["enter","imes","ai","ober","ufat"];


function ComprobarTextoUsuario(){
    let texto = textoUsuario;
    const regexMayusculas = /[A-Z]/; // palabras mayusculas
    const regexAcentos = /[áéíóúÁÉÍÓÚ]/; // acentos

    const contieneMayusculas = regexMayusculas.test(texto);
    const contieneAcentos = regexAcentos.test(texto);

    if (contieneMayusculas && contieneAcentos) {
        alert("El texto no puede contener mayúsculas y acentos.");
    } else if (contieneMayusculas) {
        alert("El texto no puede contener mayúsculas.")
    } else if (contieneAcentos) {
        alert("El texto no puede contener acentos.")
    } else {
        //El texto no contiene ni mayúsculas ni acentos
        return 1;
    }

}

function encriptarTextoUsuario(){
    textoUsuario = document.getElementById("texto-usuario").value;//traemos el texto del usuario

    if(textoUsuario === ""){// comprobamos que el textArea no este vacio
        alert("el texto no puede estar vacio");
    }else {
           if (ComprobarTextoUsuario() === 1) {//comprobamos no haya mayusculas o acentos
               let seccionEncriptado = document.getElementById("SiEncriptado");
               let seccionNoEncriptado = document.getElementById("noEncriptado");
               
               let ParrafoEncriptado = document.getElementById("parrafoEncriptado"); 
               let TituloEncriptado = document.getElementById("tituloEncriptado");

               ParrafoEncriptado.innerText = encriptar();//encriptamos
               TituloEncriptado.innerHTML = "El texto Encriptado es:";
                if(seccionEncriptado.style.display === "none"){
                    seccionEncriptado.style.display = "flex";
                    seccionNoEncriptado.style.display = "none";

                }

            }  
    }
}

function desencriptarTextoUsuario(){
    textoUsuario = document.getElementById("texto-usuario").value;//traemos el texto del usuario

    if(textoUsuario === ""){// comprobamos que el textArea no este vacio
        alert("el texto no puede estar vacio");
    }else {
           if (ComprobarTextoUsuario() === 1) {//comprobamos no haya mayusculas o acentos
               desencriptar();

               let seccionEncriptado = document.getElementById("SiEncriptado");
               let seccionNoEncriptado = document.getElementById("noEncriptado");
               
               let ParrafoEncriptado = document.getElementById("parrafoEncriptado"); 
               let TituloEncriptado = document.getElementById("tituloEncriptado");

               ParrafoEncriptado.innerText = desencriptar();//encriptamos
               TituloEncriptado.innerHTML = "El texto Descencriptado es:";
                if(seccionEncriptado.style.display === "none"){
                    seccionEncriptado.style.display = "flex";
                    seccionNoEncriptado.style.display = "none";

                }
           }  
    }
}


function desencriptar(){

    value = textoUsuario;
    for(i = 0; i < palabrasClaves.length; i++){
        value = reemplazarPalabras(value,palabrasClaves[i],palabrasReemplazo[i]);
        
    }

    return value;
}//recorremos los arrays donde tenemos las palabras clave
//para asi reemplazarlo con nuestro array de palabras valores


function encriptar(){

    value = textoUsuario;
    for(i = 0; i < palabrasClaves.length; i++){
        value = reemplazarPalabras(value,palabrasReemplazo[i],palabrasClave2[i]);
        
    }
    return value;
}//recorremos los arrays donde tenemos las palabras clave
//para asi reemplazarlo con nuestro array de palabras valores

function reemplazarPalabras(cadena,patron,reemplazo){

    textoDesencriptado = cadena.replaceAll(patron, reemplazo);
    return textoDesencriptado;

}//reemplazamos las palabras en la cadena



function copiarAlPortapapeles(){
    let txt = document.getElementById("parrafoEncriptado").innerText;//Obtenemos el texto
    navigator.clipboard.writeText(txt); //lo pasamos al portapeles
    alert("Se ha copiado el texto al portapeles"); //le avisamos al usuario
}//Pasamos el texto encriptado al portapapeles

