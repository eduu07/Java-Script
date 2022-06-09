//estruturas condicional simples 
// Igual duplo 

const a =10;
if (a == 10) {
    console.log('a é 10');
}

const b = '10';
if (b == '10') {
    console.log('b é 10');
}


console.clear();
const c = 10;
if (c === 10) console.log('c é 10');

const d = '10';
if (d === 10) {
    console.log ('d é 10');
}

console.log('Estou fora do if que compara strings');


console.clear();

const e = '10';

if (e === 10) console.log('e é numeral 10');
else {
    console.log('resultado da condição: ${e === 10}');
    console.log('e nao é o numeral 10');
}

// Multiplas condições
console.clear();
const f = 4;
const g = 11;
if (f > 5 || g > 10) {
console.log(`Condição é ${f > 5 || g > 10}`);
console.log('f é maior do que 5 ou g é maior do 10');
} else console.log('f não é maior do que 5 e g não é maior do 10');
if (f > 5 && g > 10) console.log('f é maior do que 5 e g é maior do 10');
else {
console.log(`Condição é ${f > 5 && g > 10}`);
console.log('f não é maior do que 5 ou g não é maior do 10');
}


console.clear();
const num = 'ola';

if (num % 2 == 0 && !isNaN(num)) console.log('numero par!');
else if (num % 2 != 0 && !isNaN(num)) console.log('numero impar');
else console.log ('nao é um numero!');

//operador ternario -exemplo 1 

console.clear();

let resultado = 31 > 30  ? "sim ne burro" : "claro que nao ne mano";
console.log (resultado)

console.clear();

//o PI é menor que o 4 (PI = 3.141592653589793)?
let result = Math.PI < 2 ? console.log('simmmm'):

console.log('naoooo');

const h = 11;
const cor = h > 10? 'vermelha': 'azul' ;

console.clear();
switch (cor) {
case 'vermelha':
console.log('A cor é vermelha');
break;
case 'azul':
console.log('A cor é azul');
break;
default:
console.log('A cor não é vermelha ou azul');
break;
}