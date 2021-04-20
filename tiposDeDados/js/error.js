//throw new Error("Ocorrreu um erro na aplicação!");

try {
    console.log(soma(10, 10));
} catch (error) {
    //console.log(error);
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack); 
} finally{
    console.log("Sempre será executado!");
}

function soma(a,b) {
    //return a + b;
    return a.exec(2);
}
