
var cabecera = document.querySelector('header');
var section = document.querySelector('section');
var URL = "poker2.json"



var solicitud = new XMLHttpRequest();
solicitud.open('GET', "poker2.json");
solicitud.responseType = 'json';
solicitud.send();

solicitud.onload = function() {
    var jugadores = solicitud.response;
mostrartitulo (jugadores);

}

function mostrartitulo(jsonObj) {
    var h1 = document.createElement('h1');
    h1.textContent = "nombre"  + jsonObj["nombre"]  + "brazaletes"  + jsonObj["brazaletes"]
    cabecera.appendChild(h1);
}


function mostrarinformacion (jsonObj) {
    var infoJugadores = jsonObj ['miembros']

for (var i = 0 ; i < infoJugadores.length; i++) {
    var h2nombre = document.createElement('h2');
    var h2apodo = document.createElement('p');
    var imagen = document.createElement ("img");


h2nombre.textContent = jsonObjJugadores[i].nombre;
h2apodo.textContent = jsonObjJugadores[i].apodo;
imagen.src = jsonObjJugadores[i].urlimagen;

cabecera.appendChild(h2nombre);
cabecera.appendChild(h2apodo);
cabecera.appendChild(imagen)

}
}

