var reemplazarAmpersand = (id) => {
    switch (id) {
        case 'nombre':
            var textoNombre = document.getElementById("nombre").value;
            textoNombre = textoNombre.replaceAll('&','and');

            document.getElementById("nombre").value = textoNombre;
            break;
        case 'apellidos':
            var textoApellidos = document.getElementById("apellidos").value;
            textoApellidos = textoApellidos.replaceAll('&','and');

            document.getElementById("apellidos").value = textoApellidos;
            break;
        case 'email':
            var textoEmail = document.getElementById("email").value;
            textoEmail = textoEmail.replaceAll('&','and');

            document.getElementById("email").value = textoEmail;
            break;
        default:
            break;
    }
}