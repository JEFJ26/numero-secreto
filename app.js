/* // forma de seleccionar un elemento html
let titulo = document.querySelector('h1');

// forma de cambiar el texto de un elemento html
titulo.innerHTML = 'Juego del numero secreto';

let parrafo = document.querySelector('p');

parrafo.innerHTML = 'Ingresa un numero del 1 al 10';*/


/*
//forma de hacer una funcion para conectarla a un evento html como dar un clik
function lamadoCosola( ){
    console.log('hicieron clik');
}
*/

//variable que llama a una funcion 
let numeroSecreto = 0;

//variable que guarda un valor
let intentosUsuario = 0;

let numeroMaximoDeIntentos = 3;

// este valor estara asociado a la funcion de generar un numero;
let numeroDeSorteos = 10;

let listaDeNmerosSorteos = [];


function asignarTextoHtml (elemento, texto){
    //seleccionar un elemento del html 
    let elementoHtml = document.querySelector(elemento);
    
    // cambiar el texto de un elemento html
    elementoHtml.innerHTML = texto;
    return;
}

parametrosIniciales();

function parametrosIniciales(){

    asignarTextoHtml('h1','Juego del numero secreto');
    // una funcion puede llamar a otras;
    asignarTextoHtml('p', `Ingresa un número del 1 al ${numeroDeSorteos}`);

    numeroSecreto = generarNumeroRamdon();

    intentosUsuario = 1;

    seleccionarInput();
}




/*let numeroSecreto;

numeroSecreto = parseInt(Math.random()*10)+ 1;

console.log(numeroSecreto);*/


//para que funcione se tiene que colocar la variable dentro de la funcion.

function compararIntento() {
    //recoger o el valor dentro del input
    let numeroDeUsuario = parseInt(document.getElementById("valorDeUsuario").value);
    /*console.log(typeof(numeroDeUsuario)); //sirve para verificar el tipo de entrada del usuario 
    console.log(numeroSecreto);
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario === numeroSecreto);*/

    // si el usuario acerta
    if (numeroDeUsuario == numeroSecreto){
        asignarTextoHtml('p', `exelente has acertado en ${intentosUsuario} ${intentosUsuario == 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');


    }else {
            //colocar intentos maximo por partida
            if(intentosUsuario == numeroMaximoDeIntentos){
                intentosMaximos();
            }else{

            // si el usuario no acerto a la primera
            if(numeroDeUsuario > numeroSecreto) {
                asignarTextoHtml('p', `el numero secreto es Menor`);
            }else{
                asignarTextoHtml('p', `el numero secreto es Mayor`);
            }

            //sumar 1 a intentos por cada vez que no acierte
            intentosUsuario ++;
            //llamo a la funcion vaciar caja para dejar el input en blanco
            vaciarCaja();
            //selecciono el input para que se pueda escribir de una vez con esta funcion
            seleccionarInput();
        }
    }

    return;
}

// esta funcion como se va a usar en una variable no es necesario asignar una variable dentro
// de ella, por eso se usa el return para que me retorne el valor a la variable de lo que quiero que haga la funcion.
function generarNumeroRamdon(){

    //generamos el numero;
    let numeroGenerado = parseInt(Math.random()* numeroDeSorteos) + 1;
    //verificamos que este funcionando
    console.log(numeroGenerado);

    //verificamos el contenido de la lista
    console.log(listaDeNmerosSorteos);

    //salida para la recursividad
    if(listaDeNmerosSorteos.length == numeroDeSorteos){
       asignarTextoHtml('p','ya todos los numero fueron sorteados');


    }else {
            //si el numero generado esta en la lista el vuelve a llamar a la funcion generarNumero para 
            //generar otro numero a eso se le llama Recursividad
                //el metodo includes verifica si el numero ya esta en la lista y
                //este responde un trud o false;
            if(listaDeNmerosSorteos.includes(numeroGenerado)){
                return generarNumeroRamdon();

                // si el numero no esta en la lista lo agrega a ella y retorna el numero generado
            }else{
                listaDeNmerosSorteos.push(numeroGenerado);
                return numeroGenerado;
            }

        }

}

function vaciarCaja(){

    //  primero creamos una variable para seleccionar el input en este caso por id
    // pero con el querrySelector
    let contenidoCaja = document.querySelector('#valorDeUsuario');

    // luego cambiamos el value por '' un string vacio 
    contenidoCaja.value = ''

    // y por ultimo retornamos
    return;

    // se puede hacer de la siguiente manera 
    //document.querySelector(#valorDeUsuario).value = '';
}

function nuevoJuego(){

    //tiene que asignar un nuevo numero aleatorio
    //tiene que colocar de nuevo el texto en el parrafo
    //reiniciar los intentos
    parametrosIniciales()
    //vaciar la caja
    vaciarCaja()
    //tiene que desactivar el voton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
    document.getElementById('Intentar').removeAttribute('disabled');

}
//selecciono el input para que se pueda escribir de una vez con esta funcion
function seleccionarInput(){
    document.querySelector('#valorDeUsuario').focus();
}

function intentosMaximos(){
    asignarTextoHtml('p', 'Alacanzaste el numero maximo de intentos');
    document.querySelector('#Intentar').setAttribute('disabled','true');
    document.getElementById('reiniciar').removeAttribute('disabled');
      //elimina o vacia una lista
      listaDeNmerosSorteos.length = 0;
}