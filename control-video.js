let medio, play, reiniciar, retrasar, adelantar, silenciar, menosVolumen, masVolumen;

function accionPlay() {
  if (!medio.paused && !medio.ended) {
    medio.pause();
    play.value = '\u25BA'; // ▶
    document.body.style.backgroundColor = '#fff';
  } else {
    medio.play();
    play.value = '||';
    document.body.style.backgroundColor = 'grey';
  }
}

function accionReiniciar() {
  // Reiniciar vídeo al inicio
  medio.currentTime = 0;
  // Reproducir el vídeo
  medio.play();
  // Cambiar el valor del botón a ||
  play.value = '||';
  document.body.style.backgroundColor = 'grey';
}

function accionRetrasar() {
  // Usar propiedad .currentTime
  medio.currentTime -= 5;
  // Contemplar que no existen valores negativos
  if (medio.currentTime < 0) {
    medio.currentTime = 0;
  }
}

function accionAdelantar() {
  // Avanzar 5 segundos
  medio.currentTime += 5;
  // Contemplar que no existen valores mayores a medio.duration
  if (medio.currentTime > medio.duration) {
    medio.currentTime = medio.duration;
  }
}

function accionSilenciar() {
  // Alternar silencio
  if (medio.muted) {
    medio.muted = false;
    silenciar.value = 'Silenciar';
  } else {
    medio.muted = true;
    silenciar.value = 'Escuchar';
  }
}

function accionMasVolumen() {
  // Subir volumen 0.1
  medio.volume += 0.1;
  // Contemplar que el valor máximo de volumen es 1
  if (medio.volume > 1) {
    medio.volume = 1;
  }
}

function accionMenosVolumen() {
  // Bajar volumen 0.1
  medio.volume -= 0.1;
  // Contemplar que el valor mínimo de volumen es 0
  if (medio.volume < 0) {
    medio.volume = 0;
  }
}

function iniciar() {
  medio = document.getElementById('medio');
  play = document.getElementById('play');
  reiniciar = document.getElementById('reiniciar');
  retrasar = document.getElementById('retrasar');
  adelantar = document.getElementById('adelantar');
  silenciar = document.getElementById('silenciar');
  menosVolumen = document.getElementById('menosVolumen');
  masVolumen = document.getElementById('masVolumen');

  play.addEventListener('click', accionPlay);
  reiniciar.addEventListener('click', accionReiniciar);
  retrasar.addEventListener('click', accionRetrasar);
  adelantar.addEventListener('click', accionAdelantar);
  silenciar.addEventListener('click', accionSilenciar);
  menosVolumen.addEventListener('click', accionMenosVolumen);
  masVolumen.addEventListener('click', accionMasVolumen);
}

window.addEventListener('load', iniciar, false);