//metodo ForEach ()

const frutas = ['apple', 'orange', 'cherry', ];
frutas.forEach(minhaFunçao);

function minhaFunçao (item, index) {
    console.log(`indice: ${index}`);
    console.log(`Elemento: ${item}`);
}

//metodo ForEach() com Arrow function

const  frutas01 = ['apple' , 'orange', 'cherry'];
frutas01.forEach((index, item)=> {
  console.log(`Indice: ${index}`);
  console.log(`Elemento: ${item}`);
});

console.clear();

const tarefas =[
   {
       id: 1,
       texto: 'Levar o lixo para fora',
       isCompleted: true,
   },
   {
       id: 2,
       texto: 'Encontrar com o chefe',
       isCompleted: true,

   },
   {
       id: 3,
       texto: 'Consulta no dentista',
       isCompleted: false,
       
    },
    
];

tarefas.forEach((teste)=> console.log(teste.texto));


//metodo map ()

const numeros = [4, 9, 16, 25];
const newArray = numeros.map (Math.sqrt);
console.clear()
console.log('Numeros');
console.log(numeros);
console.log('Novo array:');
console.log(newArray);


// Outro exemplo do map
console.clear();
const mapText = tarefas.map((valor) => {
return valor.texto;
});
//Imprime o novo array
console.log(mapText);


// Método filter
console.clear();
const idades = [32, 33, 16, 40];
let filtroIdade = idades.filter((idade) => {
return idade >= 18;
});
console.log(filtroIdade);

//Outro exemplo do filter

console.clear();
const filtoCompletas = tarefas.filter((item) => {
return item.isCompleted === true;
});

console.log(filtoCompletas);


//metodo find()
console.clear()

const MeuArray = [
   {nome: 'sofa', quantidade: 2 },
   {nome: 'cama', quantidades: 3},
   {nome: 'estante', quantidade: 10},
];

console.log(
    MeuArray.find((moveis) => {
        return moveis.nome === 'cama';
    })
);




