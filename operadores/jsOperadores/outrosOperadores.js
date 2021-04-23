//typeof
var numero = "20"; 

console.log(typeof numero); 
console.log(numero instanceof String); 

var numero = new String("20"); 

console.log(typeof numero); 
console.log(numero instanceof String); 

//in 

var objPessoa = {nome: "Davi", idade: "22", sexo: "M"}; 

console.log(objPessoa); 
console.log(objPessoa.nome); 
console.log("nome" in objPessoa); 
console.log("teste" in objPessoa); 

//delete 

delete objPessoa.nome; 
console.log(objPessoa);
delete objPessoa["sexo"]; 
console.log(objPessoa);

//void

function teste() {
    return 10; 
}

console.log(teste()); 
console.log(void(teste())); 

//new

var stringNome = new String("Davi"); 
console.log(stringNome);
