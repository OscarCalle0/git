document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('cambiarFondo').addEventListener('click', function() {
        var body = document.body;
        var currentColor = window.getComputedStyle(body).getPropertyValue('background-color');
        var colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF', '#FFFFFF', '#000000', '#FFA500', '#800080'];

        if (!currentColor || currentColor === 'rgb(248, 248, 248)') {
            body.style.backgroundColor = colors[0]; // Cambia al primer color de la lista si no hay color actual
        } else {
            var currentIndex = colors.indexOf(currentColor);
            if (currentIndex !== -1) {
                var nextIndex = (currentIndex + 1) % colors.length;
                body.style.backgroundColor = colors[nextIndex]; // Cambia al siguiente color en la lista
            } else {
                body.style.backgroundColor = '#f8f8f8'; // Cambia al color de fondo predeterminado si el color actual no está en la lista
            }
        }
    });
});


