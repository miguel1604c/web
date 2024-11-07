// Elementos de botón y animación
const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');
const coverElement = document.querySelector('.cover');
const paperElement = document.querySelector('#mainImage'); // La imagen de la carta
const mensajeElement = document.querySelector('#mensaje'); // El mensaje de premio
const heartElement = document.querySelector('.heart');

btnCloseElement.disabled = true;

// Evento para abrir el sobre
btnOpenElement.addEventListener('click', () => {
    btnOpenElement.disabled = true;
    btnCloseElement.disabled = false;

    coverElement.classList.add('open-cover');

    setTimeout(() => {
        coverElement.style.zIndex = -1;
        paperElement.classList.remove('close-paper');
        paperElement.classList.add('open-paper');
        paperElement.style.display = 'block'; // Muestra la imagen al abrir la carta
        
        // Mostrar el mensaje de premio
        mensajeElement.style.display = 'block';

        // Mostrar el corazón
        heartElement.style.display = 'block';
    }, 500);
});

// Evento para cerrar el sobre
btnCloseElement.addEventListener('click', () => {
    btnOpenElement.disabled = false;
    btnCloseElement.disabled = true;

    paperElement.classList.remove('open-paper');
    paperElement.classList.add('close-paper');

    setTimeout(() => {
        coverElement.style.zIndex = 0;
        coverElement.classList.remove('open-cover');
        
        // Ocultar la imagen y el mensaje
        paperElement.style.display = 'none';
        mensajeElement.style.display = 'none';
        
        // Ocultar el corazón
        heartElement.style.display = 'none';
    }, 500);
});

