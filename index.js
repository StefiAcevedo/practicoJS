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

// para la imagen (actualizar)

function updateImage() {
  const url = imageUrlInput.value;
  if (url) {
    memeImage.src = url;
  }
}

// Cambiar la imagen (revisar!)
document.getElementById('meme-image').src =
  'https://images.unsplash.com/photo-1735657061829-fc1b934035f9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

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
const contrastInput = document.getElementById('contraste');
const saturationInput = document.getElementById('saturado');
const blurInput = document.getElementById('desenfoque');
const grayscaleInput = document.getElementById('grises');

function updateFilters() {
  const brightness = brightnessInput.value;
  const contrast = contrastInput.value;
  const saturation = saturationInput.value;
  const blur = blurInput.value;
  const grayscale = grayscaleInput.value;

  memeImage.style.filter = `
        brightness(${brightness}%)
        contrast(${contrast}%)
        saturate(${saturation}%)
        blur(${blur}px)
        grayscale(${grayscale}%)
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
contrastInput.addEventListener('input', updateFilters);
saturationInput.addEventListener('input', updateFilters);
blurInput.addEventListener('input', updateFilters);
grayscaleInput.addEventListener('input', updateFilters);

// Mostrar controles iniciales
showControls('image'); // Por defecto, mostramos los controles de imagen?

// para modo oscuro/claro
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
  document.body.classList.add('dark-mode');
  localStorage.setItem('theme', 'dark');
});

document.getElementById('light-mode-toggle').addEventListener('click', () => {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('theme', 'light');
});

window.onload = function () {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
  }
};

//