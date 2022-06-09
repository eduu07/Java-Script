//while
let contador = 0;

while (contador <= 50) {
    console.log(`valor = ${contador}`);
    contador++;
}

console.clear();
let cont = 10;

while (cont >= 0) {
   console.log(`valor = ${cont}`);
   cont --;
}   

console.clear();
let i = 0,
text = '';
do {
    text += `O numero é ${i}\n`;
    i++;
} while (i < 10);
console.log(text);


console.clear();
for (let i = 0; i < 10; i++) console.log(`laços For numero: ${i}`)


// Laços de arrays
const frutas = ['apples', 'oranges', 'pears', 10, true];
console.clear();
for (let j = 0; j < frutas.length; j++) console.log(`Nome: ${frutas[j]} \n`);


// Array de objetos e laços
console.clear();
const todos = [
{
id: 1,
text: 'Take out trash',
isCompleted: true,
},
{
id: 2,
text: 'Meeting with boss',
isCompleted: true,
},
{
id: 3,
text: 'Dentist appt',
isCompleted: false,
},
];
// For overloop
for (let t of todos) {
console.log(t);
console.log(t.text);
console.log(t.id);
}s