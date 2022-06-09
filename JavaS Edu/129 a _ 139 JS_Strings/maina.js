// Classes
class Carro {
    constructor(nome, ano) {
    this.nome = nome;
    this.ano = ano;
    }
    }
    // Intanciando objetos à classe
    let meuCarro1 = new Carro('Porsche', 2021);
    let meuCarro2 = new Carro('Tesla', 2022);
    //Imprimindo valores
    console.log(meuCarro1.nome);
    console.log(meuCarro1.ano);
    console.log(meuCarro2.nome);
    console.log(meuCarro2.ano);


    //Declarar nova classe com metodos

    console.clear();
    class NovoCarro {
        constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;    
    }

    IdadeCarro(ano) {
        return ano - this.ano;
    }
}

//buscando o ano atual automaticamente

let dataHoje = new Date ();
let ano = dataHoje.getFullYear();

//console.log(dataHoje);

// Intanciando o objeto a classe 

let meuNovoCarro = new NovoCarro('ford',1986);
console.log (meuNovoCarro.IdadeCarro(ano));
console.log(dataHoje);


// Mais um exmeplo de classe
console.clear();
class ClassePessoa {
constructor(firstName, lastName, dob) {
this.firstName = firstName;
this.lastName = lastName;
this.dob = new Date(dob);
}
getBirthYear() {
return this.dob.getFullYear();
}
getFullName() {
return `${this.firstName} ${this.lastName}`;
}
}
// Instantiate object
const pessoa1 = new ClassePessoa('John', 'Doe', '1980-04-03');
const pessoa2 = new ClassePessoa('Marry', 'Smith', '1970-06-13');
console.log(pessoa1);
console.log(pessoa2.dob.getFullYear());
console.log(pessoa2.getBirthYear()); 
console.log(pessoa1.getFullName());
console.clear();

// Adicionando prototipos

PessoaFunc.prototype.getBirthDayMonth = function () {
    let dados = [this.dob.getDate(), this.dob.getMonth() + 1];
    return dados;
    };
    PessoaFunc.prototype.getFirstName = function () {
    return `${this.firstName}`;
    };
    console.clear();
    console.log(pessoa1.getBirthDayMonth());
    console.log(pessoa2.getFirstName());
