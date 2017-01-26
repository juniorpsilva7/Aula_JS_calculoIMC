/* 
função: ligar()
autor: Junior Silva
descrição: apresenta o nome do usuário e liga a lâmpada
*/

function calcularIMC(){

    //recuperação do formulario
    var formulario = document.getElementById("formulario");
    //recuperação dos valores
    var kilos = +formulario.kilos.value;
    var metros = +formulario.metros.value;
    var centimetros = +formulario.centimetros.value;

    
    var altura = ((metros * 100) + centimetros) / 100;
    var imc = kilos / (altura * altura);
    
    formulario.imc.value = imc. toFixed(2);
    
}