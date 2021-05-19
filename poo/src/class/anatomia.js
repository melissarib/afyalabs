class Person {
    constructor(name, occupation, age){
        this._name = name;
        this._occupation = occupation;
        this._age = age;
    }

    hello(name, occupation, age){
        if (occupation === "dev"){
            return `Fala ${occupation}. Seu nome é ${name} e você tem ${age} anos`
        } else {
            return `Fala ${name}, tudo bom? Sua profissão é ${occupation} e você tem ${age}`
        }
    }
}

// Como funcionava antes do ES6?
// Esse construtor de função pode ser convertido para uma declaração de classes
function NewPerson(name){ 
    this._name = name;
}

const SegundaPessoa = new NewPerson('Pedrinho')
const Pessoa = new Person;

// Esta escrita é considerada CommonJS e pode ser convertido para um ES6.
module.exports = Pessoa;
module.exports = SegundaPessoa;