let nombreAmigo = document.querySelector('#amigo');
let lista = document.querySelector('#listaAmigos'); //lista UL
let resultado = document.querySelector('#resultado');//lista UL
let array = [];

function agregarAmigo(){
    
    if(nombreAmigo.value != ''){
        let nombreIngreso = document.createElement('li');
        nombreIngreso.textContent = nombreAmigo.value;
        lista.appendChild(nombreIngreso);
        array.push(nombreAmigo.value);
        condicionesIniciales();
    }else{
        textoElemento('Debes ingresar un nombre', 'h2');
        alert('Ingresa un nombre válido');
    };
    
};

function sortearAmigo(){
    let random = Math.floor(Math.random()*array.length);
    let escogido = array[random];

    resultado.innerHTML = '';
    resultado.innerHTML = escogido;
};

function condicionesIniciales(){
    // respecto al titulo
    textoElemento('Digite el nombre de sus amigos', 'h2');
    //Celda de entrada y resultado se vacía
    nombreAmigo.value = '';
    resultado.innerHTML = '';

};

function textoElemento(texto, elemento){
    let a = document.querySelector(elemento);
    a.innerHTML = texto;
    return;
};