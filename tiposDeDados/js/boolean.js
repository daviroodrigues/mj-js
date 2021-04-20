var contaStatus =  true; 

console.log("Status da conta: ", contaStatus); 

var contaStatus = false; 

console.log("Status da conta: ", contaStatus); 

console.log(typeof contaStatus);

//if(contaStatus)
if(contaStatus == true){
    console.log("enviar e-mail"); 
}else{
    console.log("ative sua conta");
}

//negar duas vezes mostra o valor lógico
console.log(!!contaStatus); 

//valores sempre falsos
console.log(!!""); 
console.log(!!0); 
console.log(!!-0);
console.log(!!null);
console.log(!!undefined); 
console.log(NaN); //not a number, resultado de expressões matematicas que não podem ser realizadas ex: array + number ou string + number
