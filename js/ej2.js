var positionElement = document.getElementById("position");

document.addEventListener("mousemove", function(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    positionElement.textContent = "Mouse Position: X = " + mouseX + ", Y = " + mouseY;
});