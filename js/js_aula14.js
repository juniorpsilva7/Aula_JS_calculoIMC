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

    var classific = "";

    if (imc <= 20){
        //alert("Abaixo do Peso");
        classific = "Abaixo do Peso";
        formulario.classificacao.value = classific;
    } else if(imc > 20 && imc <= 25){
        //alert("Peso Ideal");
        classific = "Peso Ideal";
        formulario.classificacao.value = classific;
    } else if(imc > 25 && imc <= 30){
        //alert("Sobrepeso");
        classific = "Sobrepeso";
        formulario.classificacao.value = classific;
    } else if (imc > 30 && imc <= 35){
        //alert("Obesidade Moderada");
        classific = "Obesidade Moderada";
        formulario.classificacao.value = classific;
    } else if(imc > 35 && imc <= 40){
        //alert("Obesidade Severa");
        classific = "Obesidade Severa";
        formulario.classificacao.value = classific;
    } else if(imc > 40 && imc <= 50){
        //alert("Obesidade Mórbida");
        classific = "Obesidade Mórbida";
        formulario.classificacao.value = classific;
    } else{
        //alert("Super Obesidade");
        classific = "Super Obesidade";
        formulario.classificacao.value = classific;
    }

    
}