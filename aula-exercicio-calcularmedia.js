console.log("Seja bem vindo ao sistema de notas!")
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const getInfo = message => {
    return new Promise((resolve, reject) => {
        readline.question(`${message}\n`, data => {
            if (data) {
                return resolve(data)
            }
            return reject("A nota é obrigatória !!")
        })
    })
}

class Aluno{
    constructor(nome){
        this.nome = nome;
        this.notas = [];
    }

    adicionaNotas(nota){
        this.notas.push(nota);
    }

    calcularMedia(){
        let somaDasNotas = 0;
        for(let i=0; i<this.notas.length; i++){
            somaDasNotas += this.notas[i];
        }
        return somaDasNotas / this.notas.length;
    }
}

/*
const criarAluno = () => {
   return { 
        nome: "",
        notas: [],
        adicionaNotas: (nota) => {
            this.notas.push(nota);
        },
        calcularMedia: function(){
            let somaDasNotas = 0;
            for(let i=0; i<this.notas.length; i++){
                somaDasNotas += this.notas[i];
            }
            return somaDasNotas / this.notas.length;
        }
    }
}*/
 
//let aluno = criarAluno()

(async () => {
    let alunos = [];
    const qtdAlunos = Number(await getInfo("Digite a quantidade de alunos"));
    for(let i=0; i< qtdAlunos; i++){
        let aluno = new Aluno(await getInfo("Digite o nome do aluno"))
        const qtdNotas = Number(await getInfo("Digite a quantidade de notas do(a) " + aluno.nome));
        for(let x=1; x<= qtdNotas; x++){
            const nota = Number(await getInfo("Digite a nota número " + x + " do " + aluno.nome));
            aluno.adicionaNotas(nota);
        }
        alunos.push(aluno);
    }

    alunos.forEach(aluno => {
        console.log(`--------------------------`);
        console.log(`Nome do aluno: ${aluno.nome}`);
        console.log(`Notas do aluno: ${aluno.notas.join(", ")}`);
        console.log(`Média do aluno: ${aluno.calcularMedia()}`);
    });
})();
