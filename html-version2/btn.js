const boton = document.getElementById('btn-personajes');

function irAPersonajes() {
    window.location.href = 'personajes.html';
}

boton.addEventListener('click', irAPersonajes);