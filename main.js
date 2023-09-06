"use strict";
/* Enunciado Ejercicio 38:
Crea una función que convierta un número a binario.
 
Ejemplos:
aBinario(10) // 1010
aBinario(76) // 1001100 */
function aBinario(num) {
    let BinaryNum = [];
    console.log(parseInt(''), +''); // NaN 0
    while (num > 0) {
        const rest = (num / 2);
        num = Math.floor(rest);
        if (Number.isInteger(rest)) {
            BinaryNum.unshift(0);
            continue;
        }
        BinaryNum.unshift(1);
    }
    return +BinaryNum.join('');
}
console.log(aBinario(0));
// console.log( aBinario(76) )
