var regexpLiteral = /JS/; //literal

var regexpConstrutor = new RegExp("Jedi"); //construtor

var stringCurso = "Formação Completa JavaScript Mestre JS Jedi";

console.log(regexpLiteral.test(stringCurso));
console.log(regexpLiteral.exec(stringCurso));

console.log(regexpConstrutor.test(stringCurso));
console.log(regexpConstrutor.exec(stringCurso));


