//JavaScript e DOM 
//objeto document 

console.log(document);

//Acessar informações

console.clear();
console.log(document.domain);
console.log(document.UTL);
console.log(document.title);
console.log(document.head);
console.log(document.body);


//alterar o titulo 

document. title = 123;
//Criar um elemento <h1>

let heading = document.createElement('h1');
heading.innerHTML = 'ola alunos';
document.body.appendChild(heading);
cabecalho.style.borderBottom = 'solid 3px #000';