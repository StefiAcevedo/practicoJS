// Esto es un comentario, prueba de instalación de nodejs + extensión de código

// Elementos principales
const imageControls = document.getElementById('imagen-filtros');
const textControls = document.getElementById('texto-filtros');
const imageButton = document.getElementById('btn-image');
const textButton = document.getElementById('btn-text');

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

// Función para actualizar la imagen
function updateImage() {
    const imageUrl = imageUrlInput.value;
    if (imageUrl) {
        memeImage.src = imageUrl;
    }
}

// Manejo de errores de carga de imagen
memeImage.addEventListener('error', function() {
    alert('Error al cargar la imagen. Por favor verifica la URL.');
    // Volver a la imagen por defecto
    this.src = "https://images.unsplash.com/photo-1606755327810-e0ea1c2e7d27";
});

// para actualizar los textos
function updateText() {
    topText.textContent = topTextInput.value;
    bottomText.textContent = bottomTextInput.value;
}

// para cambiar los textos
function updateFont() {
    const font = fontSelector.value;
    topText.style.fontFamily = font;
    bottomText.style.fontFamily = font;
}

// para cambiar el color de los textos
function updateTextColor() {
    const color = textColorInput.value;
    topText.style.color = color;
    bottomText.style.color = color;
}

// para cambiar el fondo de color de los textos
function updateBgColor() {
    const bgColor = bgColorInput.value;
    topText.style.backgroundColor = bgColor;
    bottomText.style.backgroundColor = bgColor;
}

// para cambiar el contorno de los textos
function updateOutline() {
    const outline = outlineSelector.value;
    switch (outline) {
        case 'ninguno':
            topText.style.textShadow = 'none';
            bottomText.style.textShadow = 'none';
            break;
        case 'claro':
            topText.style.textShadow = '2px 2px 5px white';
            bottomText.style.textShadow = '2px 2px 5px white';
            break;
        case 'oscuro':
            topText.style.textShadow = '2px 2px 5px black';
            bottomText.style.textShadow = '2px 2px 5px black';
            break;
    }
}

// para ajustar el espaciado
function updateSpacing() {
    const spacing = `${spacingInput.value}px`;
    topText.style.padding = spacing;
    bottomText.style.padding = spacing;
}

// para ajustar el interlineado
function updateLineHeight() {
    const lineHeight = lineHeightInput.value;
    topText.style.lineHeight = lineHeight;
    bottomText.style.lineHeight = lineHeight;
}

// para los filtros de imagen
const brightnessInput = document.getElementById('brillo');
const opacityInput = document.getElementById('opacidad');
const contrastInput = document.getElementById('contraste');
const blurInput = document.getElementById('desenfoque');
const grayscaleInput = document.getElementById('grises');
const sepiaInput = document.getElementById('sepia');
const hueInput = document.getElementById('hue');
const saturationInput = document.getElementById('saturado');
const negativeInput = document.getElementById('negativo');

function updateFilters() {
    const brightness = brightnessInput.value;
    const opacity = opacityInput.value;
    const contrast = contrastInput.value;
    const blur = blurInput.value;
    const grayscale = grayscaleInput.value;
    const sepia = sepiaInput.value;
    const hue = hueInput.value;
    const saturation = saturationInput.value;
    const negative = negativeInput.value;

    memeImage.style.filter = `
        brightness(${brightness}%)
        opacity(${opacity}%)
        contrast(${contrast}%)
        blur(${blur}px)
        grayscale(${grayscale}%)
        sepia(${sepia}%)
        hue-rotate(${hue}deg)
        saturate(${saturation}%)
        invert(${negative}%)
    `;
}

// Mostrar y ocultar los controles
function showControls(type) {
    if (type === 'image') {
        imageControls.style.display = 'block';
        textControls.style.display = 'none';
    } else if (type === 'text') {
        imageControls.style.display = 'none';
        textControls.style.display = 'block';
    }
}

// Agregar eventos para mostrar los controles según el botón
imageButton.addEventListener('click', () => showControls('image'));
textButton.addEventListener('click', () => showControls('text'));

// Eventos de imagen
imageUrlInput.addEventListener('input', updateImage);

// Eventos de texto
topTextInput.addEventListener('input', updateText);
bottomTextInput.addEventListener('input', updateText);
fontSelector.addEventListener('change', updateFont);
textColorInput.addEventListener('input', updateTextColor);
bgColorInput.addEventListener('input', updateBgColor);
outlineSelector.addEventListener('change', updateOutline);
spacingInput.addEventListener('input', updateSpacing);
lineHeightInput.addEventListener('input', updateLineHeight);

// Eventos de filtros de imagen
brightnessInput.addEventListener('input', updateFilters);
opacityInput.addEventListener('input', updateFilters);
contrastInput.addEventListener('input', updateFilters);
blurInput.addEventListener('input', updateFilters);
grayscaleInput.addEventListener('input', updateFilters);
sepiaInput.addEventListener('input', updateFilters);
hueInput.addEventListener('input', updateFilters);
saturationInput.addEventListener('input', updateFilters);
negativeInput.addEventListener('input', updateFilters);

// para modo oscuro/claro

// Esperar a que todo el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
     // botones
     const darkModeButton = document.getElementById("dark-mode-toggle");
     const lightModeButton = document.getElementById("light-mode-toggle");
     
     // Función para cambiar a modo oscuro
     function enableDarkMode() {
         document.body.classList.add("dark-mode");
         if (darkModeButton) darkModeButton.style.display = 'none';
         if (lightModeButton) lightModeButton.style.display = 'block';
         localStorage.setItem("theme", "dark");
     }
 
     // Función para cambiar a modo claro
     function enableLightMode() {
         document.body.classList.remove("dark-mode");
         if (darkModeButton) darkModeButton.style.display = 'block';
         if (lightModeButton) lightModeButton.style.display = 'none';
         localStorage.setItem("theme", "light");
     }
 
     // Agregar event listeners si los botones existen
     if (darkModeButton) {
         darkModeButton.addEventListener("click", enableDarkMode);
     }
 
     if (lightModeButton) {
         lightModeButton.addEventListener("click", enableLightMode);
     }
 
     // Verificar el tema guardado
     const savedTheme = localStorage.getItem("theme");
     if (savedTheme === "dark") {
         enableDarkMode();
     } else {
         enableLightMode();
     }
});

// revisar