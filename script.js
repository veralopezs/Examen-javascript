//Solicita al usuario que elija entre la opción 1 o 2:
//Se le debe pedir dos números al usuario e indicar si son pares y múltiplos de 25 ambos, uno de ellos o ninguno.
//Se le debe pedir una palabra y comprobar si empieza o termina por a

function solicitar(){
    var elegir = prompt("Elige entre la opcion 1 o la opcion 2 (1/2)");
    elegir = parseInt(elegir);
    var numero1;
    var numero2;
    var palabra;
    

    if(elegir != '1' && elegir != '2'){
        alert("Tienes que elegir entre la opcion 1 o 2 (1/2)")
    } 
    if(elegir == '1'){
        numero1 = prompt("Introduce un numero: ");
        numero2 = prompt("Introduce un segundo numero: ");
        numero1 = parseInt(numero1);
        numero2 = parseInt(numero2);

        if ((numero1 % 25 === 0) && (numero2 % 25 === 0)){
            alert("Los numeros que has introducido son pares y multiplos de 25");
        } else if ((numero1 % 25 === 0) || (numero2 % 25 === 0)){
            alert("Uno de los numeros que has introducido es par y multiplo de 25");
        } else {
            alert("Ninguno de los numeros que has itnroducido son pares y multiplos de 25")
        }
    } else{
        palabra = prompt("Introduce una palabra: ");

            if(palabra[0] == 'a' || palabra[palabra.length] == 'a'){
                alert("La palabra empieza por a");
            } else if(palabra[0] !== 'a' || palabra[palabra.length] !== 'a'){
                alert("La palabra no empieza o termina por a")
            }
        
    }


}

//Solicita una frase al usuario y contando los espacios que tiene, indica de cuántas palabras 
//consta (debes presuponer que la frase tiene un único espacio entre palabras).

function solicitar2(){

    var frase = prompt("Introduce una frase: ");
    var contador = 0;
    for(let i = 0; i < frase.length; i++){
        if(frase[i] == ' '){
            contador++;
        }
    }
    alert(contador + 1);
}


