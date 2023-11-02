function mostrarAyuda(mensaje) {
    var helpMessage = document.getElementById('helpMessage');
    helpMessage.textContent = "Info: " + mensaje;
}

function ocultarAyuda() {
    var helpMessage = document.getElementById('helpMessage');
    helpMessage.textContent = '';
}