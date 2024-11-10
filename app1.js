/*let tituloPrincipal = document.querySelector('h1');

tituloPrincipal.innerHTML = 'Hora del Desafío';

let boton = document.querySelector('button');

boton.textContent = 'suma';

function botonOprimido () {
    console.log('este boton fue precionado');
};



function cuestion(){

    let nombreCiudad = prompt('¿ dime una ciudad de venezuela ?');

        alert(`Estuve en ${nombreCiudad} y me acordé de ti`)
};

let amo = 'yo Amo Js'

function alerta(){

    alert(amo);

};

function suma(){
    let numero1 = parseInt(prompt('primer numero'));

    let numero2 = parseInt(prompt('segundo numero'));

    let resultado = numero1 + numero2;

    alert(`el resultado de tu suma es ${resultado}`);
} */

//crear una funcion que muestre hola mundo en la consola

/*function crearTexto (texto) {
    console.log(texto);
}

crearTexto('Hola mundo'); */


//funcion de saludo personalizado

/*let nombreDeUsuario = prompt('¿Cual es tu nombre?');

function saludo (nombre){
    console.log(`Hola ${nombre} ¿como estas el dia de hoy?`);
}

saludo(nombreDeUsuario);*/

//funcion para devolver el doble

/*function pordos() {
    let numeroDeUsuario = parseInt(document.getElementById('valorDeUsuario').value);
    numeroDeUsuario = numeroDeUsuario * 2;
    console.log(numeroDeUsuario);
    return; //podia utilizar solo return num * 2;
}*/

// funcion para devolver un promedio

/*function promedio (num1, num2, num3){
    let resultado = num1 + num2 + num3 / 3;

    return console.log(resultado); // podia usar algo asi  return (a + b + c) / 3;
}

promedio(15, 20, 7); // no estoy muy seguro de como se saca un promedio
                    // tengo que investigar un poco mas
*/

// funcion para devolver el numero mayor 

/*function cualEsMayor(num1, num2){
    if(num1 > num2){
        console.log(`el numero ${num1} es mayor que el ${num2}`);
    }else if(num1 < num2){
        console.log(`el numero ${num2} es mayor que el ${num1}`);
    }else{
        console.log(`ambos numeros son el ${num1}`)
    }
    return; // pude usar algo mucho mas resumido como: return a > b ? a : b;
}

cualEsMayor(50, 50); */

//multiplicar el numero por si mismo
/*
function multiplicarNumero (){
    let numeroDeUsuario = parseInt(document.getElementById('valorDeUsuario').value);
    
    let resultado = numeroDeUsuario * numeroDeUsuario;
   
   // console.log(resultado);

    let contador = 0;
    
    while(numeroDeUsuario >= contador){
        let multicacion = numeroDeUsuario * contador;
        console.log(multicacion);
        contador++;
    }
    return; //pude usar algo como: return numero * numero; 
    //considerando que luego se lo tengo que asignar a una variable para
    //poder usarlo.
}

// numero positivo o negativo

function valuacionDeNumero(numero1 , numero2){

                        //    \|/ recordando que este signo es como decir if
                                                            //  \|/ y este como else
    return (numero1 > numero2  ? `el numero ${numero1} es mayor` : `el numero ${numero2} es mayor`);
}

let valoracion = valuacionDeNumero(2 , 8);

//console.log(valoracion);

//calculadora de IMG 

/*function calcularIMG(peso , altura){
    let img = peso / altura;
    return img;
}*/
/*
function decimales(numero){
    return numero.toFixed(2)
}

function resultadoDeImg(peso, altura){

    let img = peso / altura; // aqui falto multiplicar la altura por la altura;

    img = decimales(img);

    if(img < 18.5){
        console.log(`tu Peso inferior al normal ya que tu IMG es de ${img}`);
    }else if(img >= 18.5 && img <= 24.9){
        console.log(`Tu Composición corporal es normal ya que tu IMG es de ${img}`);
    }else if(img >= 25.0 && img <= 29.9){
        console.log(`Peso superior al normal ya que tu IMG es ${img}`);
    }else{
        console.log(`Obesidad ya que tu IMG es de ${img}`);
    }
    return;
}

// resultadoDeImg(45 , 1.66);

//Factorizacion


/*
//creacion de la funcion
function factorial(numero) {

    //creo una variable para que sea igual al numero del usuario
    let resultado = numero;


    //aplico un bucle para que se multiplique por
    // el numero menor a el y lo asigne a la variable resultado
    while(numero > 1){
        
        numero--;

        resultado = resultado * numero;

    }

    return resultado;

        //esta es otra manera en la que se puede hacer
        y es con un if / else retorna el numero y lo multiplica por
        el valor de calculadoraFactorial -1; 
        
                function calcularFactorial(numero) {
            if (numero === 0 || numero === 1) {
                return 1;
            } else {
                return numero * calcularFactorial(numero - 1);
            }
            }
            // Ejemplo de uso
            let numero = 5;
            let resultado = calcularFactorial(numero);
            console.log(`El factorial de ${numero} es ${resultado}`);
            }

let prueba = factorial(6);

console.log(prueba);*/

//conversion de moneda

/*let precioDelDolar = 40;

function cambio(dolares){

    let resultado = dolares * precioDelDolar;

    return decimales(resultado);

}

let cotizacion = cambio(15000);

console.log(cotizacion);*/

//calcular un perímetro
/*
function asignarTexto(elemento, texto){

    let elementoHtml = document.querySelector(elemento);

    elementoHtml.innerHTML = texto;
    return;
}


function calcularUnRectangulo(alto , ancho){


    let area = ancho * alto;

    alto = alto * 2;

    ancho = ancho * 2;

    let perimetro = ancho + alto;

    asignarTexto('h1' ,`el area del rectangulo es ${area}cm cuadrado`);

    asignarTexto('p', `el perimetro del rectangulo es ${perimetro}`);

    return;

}

let prueba = calcularUnRectangulo(6,10);

function tablaMultiplicar(numero){

    let contador = 0;

    let resultado = 0;
    
    while (contador <= 10){

       resultado = numero * contador;

       console.log(`${numero} * ${contador} = ${resultado}`);

       contador++;
    }
}

tablaMultiplicar(5);
*/


//Crear una lista o array
/*
let listaGenerica = [];
*/

//lista con leguajes de programacion

/*
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

lenguajesDeProgramacion.push('Java','Ruby','GoLang');

console.log(lenguajesDeProgramacion);

//crear una funcion que muestre los lenguajes de programacion incluidos en la lista
function muestra(){
    let intentos = 0

    while(intentos != lenguajesDeProgramacion.length){

        console.log(lenguajesDeProgramacion[intentos]);

        intentos++
    }
}
// crear una funcion que muestre los lenguajes de programacion empenzando desde el ultimo
function muestra2(){
    let intentos = lenguajesDeProgramacion.length - 1;

    while(intentos >= 0 ){

        console.log(lenguajesDeProgramacion[intentos]);

        intentos--
    }
}

muestra();

muestra2();

*/

//calcular el promedio de una lista 

/*
let notas = [10, 15, 20];

function promedio(){

    let resultado = (notas[0] + notas[1] + notas[2]) / 3; 


    console.log(resultado);
    return resultado;

}

promedio()

//forma mas funcional:

function calcularMedia(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma / lista.length;
}

let numeros = [10, 20, 30, 40, 50];
let media = calcularMedia(numeros);
console.log('Média:', media);

*/

//numero mayor numero menor de una lista

let numeros = [10,5,8,3,1,6,20,6]

function buscarMenosYMayor(){
    let mayor = numeros[0];

    let menor = numeros[0];

    let contador = 0;

    while (contador < numeros.length){

        if(mayor < numeros[contador]){
            mayor = numeros[contador];
        }

        if(menor > numeros[contador]){
            menor = numeros[contador];
        }


          contador++;


    }

    console.log(`el numero menor de la lista es: ${menor} y el mayor es: ${mayor}`);

    return;
}

buscarMenosYMayor();
// suma de todos los elementos de la lista
function sumaElementos (){
    let suma = 0;

    let contador = 0;

    while (contador < numeros.length){

       suma = suma + numeros[contador];
       contador++;
    }

    return suma;
}

let resultado = sumaElementos();

console.log(resultado);
// me arroja la posicion de donde se encuentra el elemento

let frutas = ['manzana', 'pera', 'cambur', 'fresa', 'durasno',];

function position(elemento){

   let buscar = frutas;

    if(buscar.includes(elemento)){
        return console.log(buscar.indexOf(elemento));
    }else{
        return console.log('-1');
    }
}

position('kiwi');

/*otra forma de hacerlo 

function encontrarIndiceElemento(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      return i; // Retorna el índice del elemento encontrado
    }
  }
  return -1; // Retorna -1 si el elemento no se encuentra en la lista
}

*/ 


//funcion que recibe dos lista de numeros y devuelve
//una lista con la suma de las dos

let lista1 = [5,3,20,15,50,48];

let lista2 = [8,7,10,15,40,15];

function sumaDeListas(){
    
    let suma1 = lista1;

    let suma2 = lista2;

    let resultado = 0;

    let nuevaLista = [];

    let contador = 0;

    while (contador < lista1.length){
        
       resultado = (suma1[contador] + suma2[contador]);

       nuevaLista.push(resultado);

       contador++;
    }

    return console.log(nuevaLista);
}

sumaDeListas();


//numeros al cuadrado 

function cuadrado(){

    let cuadrado = 0;

    let listaCuadrada = [];

    let contador = 0;

    while(contador < lista1.length){

        cuadrado = (lista1[contador])*lista1[contador];

        listaCuadrada.push(cuadrado);
        
        contador++
    }

    return console.log(listaCuadrada);
}

cuadrado();