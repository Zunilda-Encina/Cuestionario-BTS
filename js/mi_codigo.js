/* 
Archivo mi_codigo.js
En este archivo programaremos el código correspondiente
al juego de Trivia.
 */

let indice_pregunta_actual;
let total_puntos;

indice_pregunta_actual = 0;
total_puntos = 10;

const nombre_alumno = "Zunilda Encina";
const maximo_preguntas_por_jugada = 3;
const puntos_resultado_bien = 3;
let resultado =""
function mostrarResultado() {
    	document.getElementById('pantalla-juego').classList.add("d-none");
    	document.getElementById('pantalla-resultado').classList.remove("d-none");
    	if(total_puntos >= puntos_resultado_bien){
    		document.getElementById('pantalla-resultado').classList.add("bien");       
   } else {
   	document.getElementById('pantalla-resultado').classList.add("mal"); 
    }
    document.getElementById('resultado-puntos').innerHTML=total_puntos;
}

function obtenerSiguientePregunta() {
    indice_pregunta_actual++;
    if (indice_pregunta_actual < preguntas.length){
    	mostrarPregunta(preguntas[indice_pregunta_actual]);
    	return true;
    } else{ return false};
}

function mostrarPregunta (pregunta){
document.getElementById('pregunta-numero').innerHTML=(indice_pregunta_actual+1)+")";
document.getElementById("pregunta-texto").innerHTML=pregunta.pregunta;
document.getElementById("pregunta-imagen").setAttribute("src",pregunta.imagen_src)

//capturamos los div de las opciones
let divOpciones = document.querySelectorAll("#opciones div");
let inputOpciones=document.querySelectorAll("#opciones input")
let labalOpciones=document.querySelectorAll("#opciones label")

for(let i=0; i < divOpciones.length; i++){
    divOpciones[i].classList.remove("correcta");
    divOpciones[i].classList.remove("erronea");
    inputOpciones[i].checked=false;
    inputOpciones[i].setAttribute("value", pregunta.opciones[i]);
    labalOpciones[i].innerHTML = pregunta.opciones[i];
}
 }
 function verificarPreguntaActual(){
	let divOpciones = document.querySelectorAll("#opciones div");
	let inputOpciones = document.querySelectorAll("#opciones input");

	for(let i=0; i < inputOpciones.length; i++){
		if (inputOpciones[i].checked) {
			if (preguntas[indice_pregunta_actual].opciones[i] ==
				preguntas[indice_pregunta_actual].respuesta_correcta) {
			total_puntos++;
			divOpciones[i].classList.add("correcta");
		}else{
			divOpciones[i].classList.add("erronea")
		}
		}
	}

}

// mostrarPregunta(siguientePregunta);
//  mostrarPregunta(Math.floor(Math.random() * 100));
// mostrarResultado();

function numeroAleatorio(){
 return Math.floor(Math.random()*17);
}
function iniciarJuego(){
    desordenarArray(preguntas);
// Ocultar barra del menu y pantalla resultado
document.querySelector("#pantalla-inicio").classList.add("d-none");

document.querySelector("#pantalla-resultado").classList.add("d-none");
// mostrar el header y la pantalla de juego 
document.querySelector("#header").classList.remove("d-none");

document.querySelector("#pantalla-juego").classList.remove("d-none");
document.querySelector("#boton-verificar").classList.remove("d-none");

indice_pregunta_actual=0;
total_puntos=0;
mostrarPregunta (preguntas[indice_pregunta_actual]);
}

// asociar el boton jugar 
let boton_jugar=document.querySelector("#inicio-boton-jugar");
boton_jugar .addEventListener("click" , iniciarJuego);
function mostrarNombre(){
let html_nombre_alumno = document.querySelector("#nombre_alumno");
html_nombre_alumno.innerHTML = nombre_alumno;
}

//asociar el voton verificar
let boton_verificar=document.querySelector("#boton-verificar");
boton_verificar .addEventListener("click" , botonVerificar);

// asociacmos el voton siguiente a  la funcion
let boton_siguiente = document.getElementById('boton-siguiente');
boton_siguiente.addEventListener("click",botonSiguiente);

// asociacmos el voton siguiente a  la funcion
let boton_volver = document.getElementById('resultado-boton-volver-a-jugar');
boton_volver.addEventListener("click",iniciarJuego);


// for (let x = 0; x < preguntas.length; x++) {
//  console.log(preguntas[x].pregunta);
//  console.log(preguntas[x].opciones);
//  console.log("la respuesta es correctaes: " + preguntas[x].respuesta_correcta)
// }


function botonVerificar(){           
	let algunaChequeada = false;
	let inputOpciones = document.querySelectorAll("#opciones input");
	 for(let z = 0; z < inputOpciones.length; z++ ){
	 	if (inputOpciones[z].checked) {
	 	   algunaChequeada = true;
	 	   document.getElementById('boton-verificar').classList.add("d-none");
		   document.getElementById('boton-siguiente').classList.remove("d-none");
	 	   verificarPreguntaActual();
	 	   break;
	 	}
	 }
}


function botonSiguiente(){
	 document.getElementById('boton-siguiente').classList.add("d-none");
	 if(!obtenerSiguientePregunta()){
	 	mostrarResultado();
	 }else{
	 	document.getElementById('boton-verificar').classList.remove("d-none");
	 }
}