//-----------passo1------------
//Crie uma função construtora que tenha como atributos: nome (string), 
//quantidade de faltas (number) e notas (array de números). 
//-----------passo2------------
//Na função construtora crie o método calcularMedia que retorna a média 
//de suas notas. Também terá um método chamado faltas, que simplesmente 
//aumenta o número de faltas em 1. Crie alguns alunos para testar a sua função construtora. 
function Aluno (nome, faltas, notas) {
    this.nome = nome; 
    this.faltas = faltas;
    this.notas = notas; 
    this.calcularMedia = function() {
        let somaNotas = 0;   
        for (let nota of this.notas) {
             somaNotas += nota;
        }
        return somaNotas / this.notas.length;
    };
    this.falta = function(){
      this.faltas += 1;
    }
}; 

var aluno1 = new Aluno("João", 1, [10, 7.5, 10, 7.5])  
var aluno2 = new Aluno("Raphaela", 2, [5, 8, 5, 5])

console.log(aluno1.calcularMedia()) 
console.log(aluno1) 

aluno1.falta() 
console.log(aluno1.faltas) 
aluno2.falta()
console.log(aluno2.faltas)


//-----------passo3------------
//crie o objeto literal curso que tem como atributos: nome do curso (string), 
//nota de aprovação (number), faltas máximas (number) e uma lista de estudantes 
//(um array composto pelos alunos criados no passo 2).
let Curso = {
    nomeCurso: "CTD",
    maxFaltas: 3,
    notaAprovacao: 7, 
    listaEstudantes: [], 
    
    adcEstudantes: function(Aluno){
       this.listaEstudantes.push(Aluno)
    },

    estudantesAprovados: function (Aluno) {
        if (Aluno.calcularMedia() >= this.notaAprovacao && Aluno.faltas < this.maxFaltas) {
            return true;
        } else {
            return false;
        }
    },

    arrayBooleano: function () {
        var arrayBooleano = [];
        for (let i = 0; i < this.listaEstudantes.length; i++) {
           if (this.estudantesAprovados() == true) {
                var listaBooleano = this.listaEstudantes[i].nome 
                resultado.push(listaBooleano)
                resultado,push(this.estudantesAprovados(this.listaEstudantes[i]))
        }
        return resultado;
    }
}

//-----------passo4------------
//Crie o método que permite adicionar alunos à lista do curso, ou seja, quando 
//chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais 
//na propriedade lista de estudantes do objeto curso.
Curso.adcEstudantes(aluno1)
Curso.adcEstudantes(aluno2)
console.log(Curso.listaEstudantes) 


//-----------passo5------------
//Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne
//true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o 
//aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas 
//que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.
console.log(Curso.estudantesAprovados(aluno1))
console.log(Curso.estudantesAprovados(aluno2))


//-----------passo6------------
//Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de 
//booleanos com os resultados se os alunos aprovaram ou não. 
