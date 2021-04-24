//for in passa pelo index

var objPessoa = {nome: 'Davi', idade: '22', dataNasc: new Date("1999-03-05")}; 

for(var chave in objPessoa){
    console.log("chave", chave); 
    console.log("valor", objPessoa[chave]); 
}


//for of passa pelo valor

var array = [1, 2, 3, 'a', 'b', 'c']; 

for(var chave of array){
    console.log("valor", chave); 
}
