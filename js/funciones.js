window.onload=function(){
var opcion = document.getElementById("modo");

opcion.addEventListener("change", function(){
    var elemento = this.options[this.selectedIndex].value
    var numero = document.getElementById("numero").value;
    var numeroInt=parseInt(numero);
    var resultado = document.getElementById("resultado");
    switch (elemento) {
        case "1":
            //codigo que pasa de decimal a binario  
            resultado.value = numeroInt.toString(2);
        break;
        case "2":
            //codigo que pasa de decimal a octal
            resultado.value = numeroInt.toString(8);
        break;
        case "3":
            //codigo que pasa de decimal a hexadecimal
            resultado.value = numeroInt.toString(16);
        break;
        case "4":
            //codigo que pasa de binario a decimal
            numeroInt=parseInt(numero,2);
            resultado.value = numeroInt.toString(10);
        break;
        case "5":
            //codigo que pasa de octal a decimal
            numeroInt=parseInt(numero,8);
            resultado.value = numeroInt.toString(10);
        break;
        case "6":
            //codigo que pasa de hexadecimal a decimal
            numeroInt=parseInt(numero,16);
            resultado.value = numeroInt.toString(10);
        break;

    }
}, false);
}