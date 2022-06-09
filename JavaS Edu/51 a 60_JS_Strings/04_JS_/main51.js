//array unidimensionais 
//podemos criar array assim

const num1 = new Array(30, -1, 5, 3, 121);
//ou podemos fazer 
const num2 = [-2, 40, 111, 33, 64];

console.log (num1);
console.log (num2);

//acessando elementos diversos do arrays
console.log('primeiro elemento de num1: ${num1[0]}');
console.log('primeiro elementos de num2: ${num2[0]}');

console.log('terceiro elemento de num1:${num1[2]}');
console.log('quinto elemento de num2: ${nuum2[5]}');


//Array bidimensionais 

const matrix = [
['banana', 'maça', 'pera'],
['laranja', true, 1],
[null, 'uva', -350],
];

//acesssando elementos diversos dos array
console.log('acessa a primeira linha: ${matrix[0]}');
console.log('acessa o segundo elemento: ${matrix[0][1]}');

let moedas =['real', 'dolar', 'coroa', 'peso',];

console.log('antes: ${moedas}');
moedas[2] = 'Yen';
console.log('depois: ${moedas}');

let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
];
console.log('Antes');
console.log(matrix1);

matrix[0][2] = -10;
console.log('depois:');
console.log(matrix1);
 
console.clear();
let numArray = [1, 2, 3, 4];
console.log(typeof numArray);

let numArray2 = numArray.toString();
console.log(typeof numArray2);


let teste1 = [0, 1, 2, 3, 4, 5];
let teste2 = teste1.join(' *** ');
console.log(teste2);
console.log(typeof teste2);

let array = [0, 1, 2, 3, 4];
console.log(array.length);

const frutas1 =  ['banana', 'laranja', 'maça', 'manga'];
let x = frutas1.pop(); //x = "manga"

console.log(frutas1);
console.log(x);


const frutas2 = ['Banana', 'Laranja', 'Maçã', 'Manga'];
let y = frutas2.push('goiaba'); // y = 5
console.log(frutas2);
console.log(y);

// shift()
console.clear();
const frutas3 = ['Banana', 'Laranja'];
let z = frutas3.shift(); // z = 'Banana'
console.log(frutas3);
console.log(z);

// unshift()
console.clear();
const frutas4 = ['Banana', 'Laranja'];
let w = frutas4.unshift('Kiwi'); // w = 3
console.log(frutas4);
console.log(w);

console.clear();

const frutas5 = ['uva', 'goiaba', 'melancia','manga', ];
delete frutas5[2];

console.log (frutas5);

// Métodos de busca en strings
console.clear();
let frase = 'Sou um aluno do IOS e o IOS é muito bom!';
console.log(frase.indexOf('IOS')); // Returns 16
console.log(frase.lastIndexOf('IOS')); // Returns 24
console.log(frase.search('IOS')); // Returns 16
console.log(frase.startsWith('S')); // Verdadeiro - retorna true
console.log(frase.startsWith('Sou')); // Verdadeiro - retorna true
console.log(frase.startsWith('a')); // Falso - retorna false
console.log(frase.endsWith('!')); // Verdadeiro - retorna true
console.log(frase.endsWith('bom!')); // Verdadeiro - retorna true
console.log(frase.endsWith('x')); // Falso - retorna false

