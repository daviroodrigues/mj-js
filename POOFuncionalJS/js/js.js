//funcional 

function sejaBemVindo() {
    console.log("Seja bem vindo a formação JS Mestre Jedi");
}

console.log("Chamando a função seja bem vindo sejaBemVindo(): ")

sejaBemVindo();

//POO

var objPessoa = {
    nome: "Davi",
    curso: "Mestre Jedi JS",
    verAula: function () {
        console.log("Vendo Aula de JS.");
    }
}

console.log(objPessoa);

console.log("Acessando propriedades do objeto:");

console.log(objPessoa.nome);
console.log(objPessoa.curso);

console.log("Acessndo o metodo do objeto pessoa: ");

objPessoa.verAula();


