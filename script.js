
let input = document.querySelector('#input-texto');
input.focus();

let output = document.querySelector('#msg');

document.querySelector('#btn-encriptar').onclick = function () {
    event1(input.value);
}

document.querySelector('#btn-desencriptar').onclick = function () {
    event2(input.value);
}

document.querySelector('#btn-copy').onclick = function () {
    event3('#btn-copy');
}

function event1 (texto) {
    r = /[^a-z ]/;
    if (r.test(texto))
    {
        alert("Solo letras minúsculas sin acento ni caracteres especiales");
    }
    else {
        output.value = " ";
        output.value = Cifrado(texto);
        output.focus();
    }
}

function event2 (texto) {
    r = /[^a-z ]/;
    if (r.test(texto))
    {
        alert("Solo letras minúsculas sin acento ni caracteres especiales");
    }
    else {
        output.value = " ";
        output.value = Descifrado(texto);
        output.focus();
    }
}

function event3 (element) {
    element.execCommand("copy");
}

function Cifrado(texto) {
    let palabras = texto.split(' ');
    let resultado = [];
    let final = [];
    for (let palabra of palabras) {
        let nuevasPalabras = [];
        for (let letra of palabra) {
            switch (letra) {
                case "a": {
                    nuevasPalabras.push("ai");
                    resultado = nuevasPalabras.join('');
                    break;
                }
                case "e": {
                    nuevasPalabras.push("enter");
                    resultado = nuevasPalabras.join('');
                     break;
                }
                case "i": {
                    nuevasPalabras.push("imes");
                    resultado = nuevasPalabras.join('');
                    break;
                }
                case "o": {
                    nuevasPalabras.push("ober");
                    resultado = nuevasPalabras.join('');
                    break;
                }
                case "u": {
                    nuevasPalabras.push("ufat");
                    resultado = nuevasPalabras.join('');
                    break;
                }                
                default: {
                    nuevasPalabras.push(letra);
                    resultado = nuevasPalabras.join('');
                    break;
                }
            }
        }
    final.push(resultado)
    }
return final.join(' ');
}

function Descifrado (texto) {
    let palabras = texto.split(' ');
    let resultado = [];
    let final = [];
    for (let palabra of palabras) {
        z = /enter|ai|imes|ober|ufat/;
        if (z.test(palabra)) {
            resultado = palabra.replaceAll("ai","a");
            resultado = resultado.replaceAll("enter","e");
            resultado = resultado.replaceAll("imes","i");
            resultado = resultado.replaceAll("ober","o");
            resultado = resultado.replaceAll("ufat","u");
        }
         else {
            resultado = palabra;
        }
    final.push(resultado)
    }
return final.join(' ');
}
