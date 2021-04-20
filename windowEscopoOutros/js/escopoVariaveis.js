var cliente = "Davi"; 
console.log(cliente);

var msgVenda = "Olá "; 
console.log(msgVenda + cliente);

function realizarVenda(item, valor) {
    var msgVenda = "Venda realizada com sucesso!";
    console.log(msgVenda); 
    console.log("Cliente: ", cliente);
    console.log("Item:", item); 
    console.log("Valor:", valor);
}

realizarVenda("Refri", 5.00);


