let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = []
let numeroMaximo = 10;

// Funcion para cambiar p y h1 de forma dinamica
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto
}

// Logica de numero aleatorio
function verificarIntento() {

    // Obtener el valor que ingreso el usuario 
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value)

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`)
        // Vamos a remover el disable de la etiqueta 
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        // El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor')
        } else {
            asignarTextoElemento('p', 'El nummero secreto es mayor')
        }
    }
    // Contar  cuantos intentos hizo el usuario
    intentos++
    // LLamado de la funcion limpiar caja
    limpiarCaja()
}

// Funcion para que cada vez que dijite se limpie 
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

// Funcion para generar un numero aleatorio
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1
    // Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se a sorteado todos los numeros posibles ')
    } else {
        // Si el numero generado esta incluido en la lista 
        // El metodo include verifica si algo ya existe y nos devuelve un true or false
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado
        }
    }
}

// Guardamos los mensajes iniciales del juego
function condicionesIniciales() {
    // Asignando el valor de h1 y p
    asignarTextoElemento('h1', 'Juego del numero secreto')
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`)
    // Generar el numero aleatorio
    numeroSecreto = generarNumeroSecreto()
    // Inicializar el numero de intentos
    intentos = 1;
}

// Boton para reiniciar el juego
function reiniciarJuego() {
    // Limpiar la caja
    limpiarCaja()
    // Indicar mensaje de intervalo de numeros
    // Generar el numero aleatorio
    // Inicializar el numero de intentos
    condicionesIniciales()
    // Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')
}

// Llamada la funcion
condicionesIniciales()

