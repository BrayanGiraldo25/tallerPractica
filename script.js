alert("pagina de practica");

let practica = prompt("Elige la practica que deseas (1-11)");

switch(practica){
    case "1":
    console.log("Ejercicio 1: Datos personales");
    let nombre = prompt("Coloca tu nombre");
    let edad = prompt("Coloca tu edad");
    let residencia = prompt("Coloca tu ciudad de residencia");

    console.log("Hola, mi nombres es " + nombre + " y tengo " + edad + ", vivo en " + residencia);
    break;
    case "2":
        console.log("Ejercicio 2: Suma de 2 numeros");
        let digito1 = parseInt(prompt("Coloca el primer digito"));
        let digito2 = parseInt(prompt("Coloca el segundo digito"));
        let resultado = digito1+digito2;
        console.log("La suma de los 2 digitos previos es de " + resultado);
        break;
    case "3":
        console.log("Ejercicio 3: Conversion de unidades");
        let metros = prompt("Indica cuantos metros hay");
        let centimetros = metros*100;
        console.log("Metros convertido a centimetros seria " + centimetros);
        break;
    case "4":
        console.log("Ejercicio 4: Calculo del area");
        let ancho = prompt("Indica que tan grande es el ancho");
        let alto = prompt("indica que tan grande es el alto");
        let area = ancho * alto;
        console.log("el ancho del rectangulo es de " + ancho + " y el alto del rectangulo es " + alto + " y el area del rectangulo es " + area);
        break;
    case "5":
        console.log("Ejercicio 5: Presentacion de un producto");
        let ProductoN = prompt("Indique el nombre del producto");
        let ProductoP = prompt("Indique el precio del producto");
        let ProductoC = prompt("Indique la cantidad del producto");
        console.log ("Producto \n Nombre del producto: " + ProductoN + "\n Precio del producto: " + ProductoP + "\n Cantidad del producto: " + ProductoC + " \n Total: " + (ProductoP*ProductoC));
        break;
    case "6":
        console.log("Ejercicio 6: Conversion de Temperatura");
        let Celsius = prompt("Indique la cantidad de grados Celsius");
        let Farenheirt = (Celsius * (9/5)) + 32;
        console.log ("La cantidad de grados Celsius es de " + Celsius + " y a grados Farenheirt es de " + Farenheirt);
        break;
    case "7":
        console.log("Ejercicio 7: Perimetro de un Cuadrado");
        let radio = prompt("Ingresa el radio del cuadrado");
        let perimetro = 2 * Math.PI * radio;
        console.log("El perimetro del cuadrado es de: " + perimetro);
        break;
    case "8":
        console.log("Ejercicio 8: Calculo Volumen de una esfera");
        let radioE = prompt("Ingresa el radio de una esfera");
        let perimetroE = (4/3) * Math.PI * Math.pow(radioE, 3);
        console.log("El perimetro de una Esfera con un radio de " + radioE + " es de: " + perimetroE);
        break;
    case "9":
        console.log("Ejercicio 9: Conversion a Moneda");
        let 
}