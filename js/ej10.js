var foto = document.getElementsByTagName('img');

console.log(foto);


for (var i = 0; i < fotos.length; i++) {
    fotos[i].addEventListener('dragend', function(evento) {

        this.style.position = 'absolute';
        this.style.left = evento.clientX + 'px';
        this.style.top = evento.clientY + 'px';
    });
}