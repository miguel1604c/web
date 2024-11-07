// Selecciona el contenedor donde aparecerán los corazones
const heartContainer = document.getElementById('heartContainer');

// Función para generar un corazón
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Posición inicial aleatoria
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // Duración entre 2 y 5 segundos

    // Añade el corazón al contenedor
    heartContainer.appendChild(heart);

    // Elimina el corazón después de la animación para no sobrecargar el DOM
    setTimeout(() => {
        heart.remove();
    }, 5000); // Tiempo de vida del corazón (coincide con la duración máxima de animación)
}

// Genera un corazón nuevo cada 300ms
setInterval(createHeart, 300);
