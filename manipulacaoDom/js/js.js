var nomeBootInputText = window.document.getElementById("nomeBoot"); 
var estadoSelect = document.getElementById("estadoSelecioneBoot"); 

function selecionarCampoInputText() {
    console.log("typeof: " + typeof nomeBootInputText);
    console.log("object call: " + Object.prototype.toString.call(nomeBootInputText));
    //alert(nomeBootInputText);
    //nomeBootInputText.disabled = true;
    console.log("nomeBootInputText.disable = true");
    console.log("Recupear valor com value: " + nomeBootInputText.value);
    nomeBootInputText.readOnly = true;
    console.log("nomeBootInputText.readonly = true"); 
    console.log("tagName = " + nomeBootInputText.tagName);
    console.log("tagName type: " + nomeBootInputText.type);
}

function selecionarCampoSelect() {
    console.log("Type of: " + typeof estadoSelect);
    console.log("Object call:" + Object.prototype.toString.call(estadoSelect));
    console.log("tagName = " + estadoSelect.tagName);
    console.log("tagName type: " + estadoSelect.type);
}

var emailPromocionalCheck = document.querySelector("#emailPromocionalCheckBoot");

function selecionarCampoEmailCheck() {
    console.log("Object call tipo: " + Object.prototype.toString.call(emailPromocionalCheck));
    console.log("tagName: " + emailPromocionalCheck.tagName); 
    console.log("tagName type: " + emailPromocionalCheck.type);
    console.log("valor value: " + emailPromocionalCheck.value);
    console.log("valor checked:" + emailPromocionalCheck.checked);
}

var formaContatoRadio = document.querySelector("[name=formaContatoRadioBoot]");

function selecionarCampoRadio() {
    console.log("Object call tipo: " + Object.prototype.toString.call(formaContatoRadio));
    console.log("tagName: " + formaContatoRadio.tagName); 
    console.log("tagName type: " + formaContatoRadio.type);
    console.log("valor value: " + formaContatoRadio.value);
    console.log("valor checked:" + formaContatoRadio.checked);
}

var radios = document.getElementsByName("formaContatoRadioBoot");

function selecionarCamposRadios() {
    console.log("Object call tipo: " + Object.prototype.toString.call(radios));
}

var checkeds = document.getElementsByClassName("checkbox"); 

var selects = document.getElementsByTagName("select"); 

var elements = document.querySelectorAll("input[type=text]");

var formulario = document.querySelector("#formBoot");

console.log("form tipo: " + Object.prototype.toString.call(formulario));

function exibirDados(elemento){
    console.log(elemento); 
    alert(elemento);
}


