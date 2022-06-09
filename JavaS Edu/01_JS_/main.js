console.log ('hello world');
console.error('Essa é uma mensagem de erro');
console.warn('Essa é uma mensagem de aviso');

console.clear ();
let idade = 30;
const nome = 'nico';
console.log(nome);
console.log (idade);
idade = 31;
console.log(idade);


const nome_pessoa = 'John';
const idade1 = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof nome_pessoa);
console.log(typeof idade1);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);


const pessoa = 'irmao de Jorel';
const idade2 = 30;
console.log('meu nome é ' + pessoa + 'e eu tenho ' + idade2 + 'anos!'); 

const hello = 'meu nome é ${pessoa} e eu tenho ${idade2} anos! ';
console.log(hello);

let teste1 = 1;
let teste2 = 0;
let valor1 = true;
let valor2 = false;

console.log(teste1 > teste2);
console.log(teste1 < teste2);
console.log(teste1 && teste2);
console.log(valor1 && valor2);