window.onload = function () {
    crearCanvas();
};

function crearCanvas() {
    var canvas = document.getElementById('canvas');

    for (var i = 0; i < 100; i++) {
        var row = document.createElement('tr');

        for (var j = 0; j < 100; j++) {
            var cell = document.createElement('td');
            row.appendChild(cell);
        }

        canvas.appendChild(row);
    }

    canvas.onmousemove = function (event) {
        dibujar(event);
    };
}

function dibujar(event) {
    var ctrlKey = event.ctrlKey;
    var shiftKey = event.shiftKey;

    var color = getColor(ctrlKey, shiftKey);

    var cell = event.target;
    cell.style.backgroundColor = color;
}

function getColor(ctrlKey, shiftKey) {
    if (ctrlKey) {
        // Tecla Ctrl pulsada: color rojo
        return 'red';
    } else if (shiftKey) {
        // Tecla Shift pulsada: color azul
        return 'blue';
    } else {
        return 'transparent';
    }
}