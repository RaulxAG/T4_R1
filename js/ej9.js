var foto = document.getElementsByTagName('img')[0];

console.log(foto);

foto.addEventListener('dragend', function(evento) {
    
    foto.style.position = 'absolute';
    foto.style.left = evento.clientX + 'px';
    foto.style.top = evento.clientY + 'px';
});