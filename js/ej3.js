 var tiempoInicio = new Date().getTime();

 window.onload = function () {
     var tiempoCarga = new Date().getTime();

     var tiempoTranscurrido = (tiempoCarga - tiempoInicio)

     document.getElementById('tiempoTranscurrido').innerHTML = tiempoTranscurrido;
 };