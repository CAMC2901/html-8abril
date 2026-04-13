const boton = document.getElementById('btn-personajes');
const boton2 = document.getElementById('btn-inicio');

function irAPersonajes() {
    window.location.href = 'personajes.html';
}
function irAinicio() {
    window.location.href = 'pagina.html';
}

boton.addEventListener('click', irAPersonajes);
boton2.addEventListener('click',irAinicio);