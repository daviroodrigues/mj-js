var data = new Date();
console.log(data);

var dataString = new Date("2021-03-29"); 
console.log(dataString);

console.log(dataString.getFullYear()); 
console.log(dataString.getMonth()); 
console.log(dataString.getDay()); 
console.log(dataString.getDate()); 
console.log(dataString.getMinutes()); 

//var dataParam = new Date(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number);
var dataParam = new Date(2021, 03, 05, 7, 40, 1, 0);
console.log(dataParam);

