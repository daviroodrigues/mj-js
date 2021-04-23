//var periodo = "matutino"; 
//var periodo = "vespertino"; 
var periodo = "noturno"; 

var mensagem = periodo == "matutino" ? "Bom dia": ( mensagem = periodo == "vespertino" ? "Boa tarde": "Boa noite")

console.log(mensagem); 
