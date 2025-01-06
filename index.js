// esto es un comentario, prueba de instalación de nodejs + extension de codigo

// primeros pasos DOM

// para la imagen
const imageUrlInput = document.getElementById('image-url-input');
const memeImage = document.getElementById('meme-image');

// para el texto
const topTextInput = document.getElementById('top-text-input');
const bottomTextInput = document.getElementById('bottom-text-input');
const topText = document.getElementById('top-text');
const bottomText = document.getElementById('bottom-text');

// para controladores de texto
const fontSelector = document.getElementById('fuente');
const textColorInput = document.getElementById('color-letra');
const bgColorInput = document.getElementById('color-fondo');
const outlineSelector = document.getElementById('contorno');
const spacingInput = document.getElementById('espaciado');
const lineHeightInput = document.getElementById('interlineado');


// para la imagen (actualizar)
function updateImage() {
    const url = imageUrlInput.value;
    memeImage.src = url; // Actualiza la URL de la imagen
}

// para la imagen (actualizar)
