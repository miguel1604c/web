// Selecciona el elemento de audio y el icono de sonido
const backgroundMusic = document.getElementById('backgroundMusic');
const soundIcon = document.getElementById('soundIcon');

// Función para alternar la reproducción de sonido
function toggleSound() {
    if (backgroundMusic.paused) {
        backgroundMusic.play(); // Reproduce la música si está pausada
        soundIcon.textContent = '🔊'; // Cambia el icono a sonido activado
    } else {
        backgroundMusic.pause(); // Pausa la música si está reproduciéndose
        soundIcon.textContent = '🔇'; // Cambia el icono a sonido desactivado
    }
}

// Reproduce la música automáticamente al cargar la página
window.addEventListener('load', () => {
    backgroundMusic.play().catch(error => {
        // En algunos navegadores, la reproducción automática está deshabilitada
        console.log('Reproducción automática no permitida sin interacción del usuario');
        soundIcon.textContent = '🔇'; // Muestra el icono de sonido apagado inicialmente
    });
});


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








