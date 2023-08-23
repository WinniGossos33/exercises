"use strict";
/* Enunciado Ejercicio 31:
Dado un texto, crea una función que sea capaz de invertir
el orden de sus palabras.
 
No podemos usar funciones nativas del lenguaje.
 
Ejemplos:
invertirPalabras("Hola soy Victor Robles"); // Devuelve: Robles Victor soy Hola */
//! NATIVE FUNCTION 
// function invertirPalabras( chain: string ): string {
//     const arrChain = chain.split(' ').reverse()
//     return arrChain.join(' ')
// }
//! WITHOUT NATIVE FUNCTION 
function unshiftByMe(arr, ...items) {
    let len = arr.length;
    let n = items.length;
    for (let i = len - 1; i >= 0; i--) {
        arr[i + n] = arr[i];
    }
    for (let i = 0; i < n; i++) {
        arr[i] = items[i];
    }
    return arr;
}
function invertirPalabras(chain) {
    let newChain = [];
    let word = '';
    let finalWord = '';
    for (let letter of chain) {
        if (letter === ' ') {
            newChain = unshiftByMe(newChain, word);
            word = '';
            continue;
        }
        word += letter;
    }
    newChain = unshiftByMe(newChain, word);
    for (let i = 0; i < newChain.length; i++) {
        if (i === 0) {
            finalWord = newChain[i];
            continue;
        }
        finalWord += ` ${newChain[i]}`;
    }
    return finalWord;
}
console.log(invertirPalabras("Hola soy Victor Robles"));
