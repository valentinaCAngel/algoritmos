

function Saludo() {
    alert("BIENVENIDO USUARIO -SIN PALABRAS")
}

function suma(){
    //DECLARAMOS LAS VARIABLES

    let A = 0;
    let B = 0;
    let SUMA = 0;


    //SOLICITAR LOS VALORES

    alert("Este algoritmo realiza la suma de dos valores ingresados por usted ");
    A = parseInt(prompt("ingrese el primer numero"));
    B = parseInt(prompt("Ingrese el segundo numero"));

    //REALIZAMOS LAS OPERAIOCNES
    SUMA = A + B;

        //MOSTRAMOS LOS RESULTADOS
    alert("el resultado es " + SUMA + ", las mejoras");
}

function operacionesBasicas() {
    let A = 0;
    let B = 0; 
    let SUMA = 0;
    let RESTA = 0;
    let MULTIPLICACION = 0; 
    let DIVISION = 0;

    alert("En este algoritmo se va a hacer las operaciones basicas con los dos numeros que usted ingrese, para ver los resultados de cada uno de enter")

    A = parseInt(prompt("Ingrese el primer numero"))
    B = parseInt(prompt("Ingrese el segundo numero"))

    SUMA = A + B;
    RESTA = A - B;
    MULTIPLICACION = A * B;
    DIVISION = A / B;

    alert("La suma es " + SUMA);
    alert("La restas es " + RESTA);
    alert("La multiplicacion es " + MULTIPLICACION);
    alert("La division es " + DIVISION);

}

function cuadradoNumero() {

    let valor = 0;

    valor = parseInt(prompt("Ingrese un numero"));

    cuadrado = valor * valor;

    alert("El cuadrado del valor ingresado es " + cuadrado);

}

function areaTriangulo(){
    let base = 0;
    let altura = 0;

    alert("Este algoritmo le va a mostrar el area del triangulo");

    base = parseInt(prompt("Ingrese la base del triangulo"));
    altura = parseInt(prompt("Ingrese la altura del triangulo"));

    area = (base * altura) / 2;
    
    alert("El area del triangulo es " + area);

}


function numeroMayor() {
    let A,B = 0;

    alert("en este algoritmo");

    A = parseInt(prompt("ingrese el primer numero "));
    B = parseInt(prompt("Ingrese el segundo nummero"));

    if (A == B) {
        alert("Los valores ingresados son iguales");
    } 
    else if (A > B){
        alert(A + " Es mayor que " + B);
    }
    else {
        alert(B + " Es mayor que " + A); 
    }
}

function conversionMedidad(){

    let metros = 0;

    alert("Este algritmo medidas")

    metros = parseInt(prompt("Ingrese el valor en metros"));

    pulgadas = metros * 39.37;
    pies = metros * 3.28;
    km = metros / 1000;



    alert("Pulgadas" + pulgadas);
    alert("Pies" + pies);
    alert("Kilometro" + km);

}

function conversionTemperatura() {
    let centigrados = 0;


    alert("Este algoritmo va a hacer la conversion de unidades de medida de Centigrados a  Fahrenheit Y Celsius ");

    centigrados = parseInt(prompt("Ingrese el valor del Grado Centigrado"));

    fahrenheit = (centigrados *  9/5) + 32;
    celsius = (fahrenheit - 32) * 5 / 9;

    alert("fahrenheit: " + fahrenheit);
    alert("celsius: " + celsius);
}

function promedioEstudiante(){
    let nombre;
    let materia;
    let notas;
    let SUMA = 0;

    alert("da el promedio de 10 notas");

    nombre = prompt("Ingrese el nombre del estudiante");
    materia = prompt("Ingrese la materia ");
    nota1 = parseInt(prompt("Ingrese la 1 nota"));
    nota2 = parseInt(prompt("Ingrese la 2 nota"));
    nota3 = parseInt(prompt("Ingrese la 3 nota"));
    nota4 = parseInt(prompt("Ingrese la 4 nota"));
    nota5 = parseInt(prompt("Ingrese la 5 nota"));
    nota6 = parseInt(prompt("Ingrese la 6 nota"));
    nota7= parseInt(prompt("Ingrese la 3 nota"));
    nota8 = parseInt(prompt("Ingrese la 4 nota"));
    nota9 = parseInt(prompt("Ingrese la 5 nota"));
    nota10 = parseInt(prompt("Ingrese la 6 nota"));
   

    SUMA = nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8 + nota9 + nota10;
    promedio = SUMA / 10;

    alert("promedio " + promedio)
    
}

function descuentoCompra(){
    
    // Pedir al usuario la cantidad en kilos de manzanas
let kilosManzanas = parseFloat(prompt("Ingrese la cantidad en kilos de manzanas:"));

// Inicializar variables para el precio por kilo y el descuento
let precioPorKilo = 4500;
let descuento = 0;

// Calcular el descuento según la cantidad de kilos
if (kilosManzanas >= 3 && kilosManzanas <= 5) {
    descuento = 0.10;
} else if (kilosManzanas >= 6 && kilosManzanas <= 10) {
    descuento = 0.15;
} else if (kilosManzanas > 10) {
    descuento = 0.20;
}

// Calcular el monto a pagar
let montoTotal = kilosManzanas * precioPorKilo;
let montoConDescuento = montoTotal - (montoTotal * descuento);

// Mostrar el resultado al usuario
alert("Cantidad de kilos de manzanas: " + kilosManzanas + " kg");
alert("Precio por kilo: $" + precioPorKilo);
alert("Descuento aplicado: " + (descuento * 100) + "%");
alert("Monto a pagar: $" + montoConDescuento);

}

function parImpar() {
    // Pedir al usuario que ingrese un número
let numero = parseInt(prompt("Ingrese un número:"));

// Verificar si el número es par o impar
if (numero % 2 == 0) {
    alert(numero + " es un número par.");
} else {
   alert(numero + " es un número impar.");
}

}


function salarioHora(){
    // Pedir al usuario que ingrese las horas trabajadas
let horasTrabajadas = parseInt(prompt("Ingrese las horas trabajadas en la semana:"));

// Definir la tarifa por hora y las horas estándar de trabajo
let tarifaPorHora = 10000; // $10,000 por hora
let horasEstandar = 40;

let salarioSemanal;

// Calcular el salario según las horas trabajadas
if (horasTrabajadas <= horasEstandar) {
    salarioSemanal = horasTrabajadas * tarifaPorHora;
} else {
    let horasExtras = horasTrabajadas - horasEstandar;
    salarioSemanal = (horasEstandar * tarifaPorHora) + (horasExtras * 20000); // $20,000 por hora extra
}

// Mostrar el salario semanal al obrero
alert("El salario semanal es: $" + salarioSemanal);

}

function menorde3(){
    // Pedir al usuario que ingrese tres números
let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
let numero3 = parseFloat(prompt("Ingrese el tercer número:"));

// Encontrar el número menor usando condicionales
let menorNumero;

if (numero1 < numero2 && numero1 < numero3) {
    menorNumero = numero1;
} else if (numero2 < numero1 && numero2 < numero3) {
    menorNumero = numero2;
} else {
    menorNumero = numero3;
}

// Mostrar el número menor
alert("El número menor es: " + menorNumero);

}