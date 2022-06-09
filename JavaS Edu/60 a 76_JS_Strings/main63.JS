let valor01 = 100;
const valor02 = 5;
console.log('A multiplicação de ' + valor01 +' por ' + valor02 + ' é ' + valor01 *
valor02 );
console.log(`A multiplicação de ${valor01} por ${valor02} é ${valor01 * valor02}`);





//metodos de strings 
console.clear();
const string01 = 'Instituto Da Oportunidade Social';




//Acessando o primeiro caractere
console.log(string01.charAt(0));
console.log(string01[0])




//acessando o decimo primeiro caractere
console.log(string01.charAt(10));
console.log(string01[10]);





let texto = 'dkkkkkkkkkkkkkkkkkkkkkkkk';
console.log(texto.length)




const frutas5 = ['uva', 'goiaba', 'melancia','manga', ];
delete frutas5[2];

console.log (frutas5);





console.clear();
const s = 'Hello World';

console.log(s.toUpperCase());
console.log(s.toLowerCase());





console.clear();
const str = 'Mozilla';
console.log(str.substring(1, 3));
console.log(str.substring(2));
const str1 = 'A raposa é um animal esperto';
const palavras = str1.split(' ');
console.log(palavras[3]);
// Saída esperada: "um"
const chars = str1.split('');
console.log(chars[7]);
// Saída esperada: "a"
const strCopy = str1.split();
console.log(strCopy);
// Saída esperada: Array ["A raposa é um animal esperto"]





console.clear();
let mensagem = 'venha para a Microsoft';
console.log(mensagem);

let novaMensagem = mensagem.replace('microsoft', 'IOS');
console.log(novaMensagem);



//Remover Espaços
console.clear();
let text = ' Olá Alunos do IOS! ';
console.log(text.trim());





// Métodos de busca en strings

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