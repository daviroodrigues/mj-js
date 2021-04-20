
/*
//operador de atribuição "="

var nome = "Davi"; 
var num = 10; 

nome += num;  
console.log(nome);

*/

//operador left shift 
console.log("############### LEFT SHIFT ###############"); 
var num1 = 320; 
console.log("base 10", num1); 
console.log("base 2", num1.toString(2)); 
num1 <<= 2;
console.log(num1); 

//operador right shift 
console.log("############### RIGHT SHIFT ###############"); 
var num1 = 320; 
console.log("base 10", num1); 
console.log("base 2", num1.toString(2)); 
num1 >>= 2;
console.log(num1); 

//operador right shift sem sinal
console.log("############### RIGHT SHIFT SEM SINAL ###############"); 
var num1 = -320; 
console.log("base 10", num1); 
console.log("base 2", num1.toString(2)); 
num1 >>>= 2;
console.log(num1); 

console.log("############### RIGHT SHIFT ###############"); 
var num1 = -320; 
console.log("base 10", num1); 
console.log("base 2", num1.toString(2)); 
num1 >>= 2;
console.log(num1); 
