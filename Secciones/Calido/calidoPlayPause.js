var estadoPlayer = "pause";

function playPause1() {
    var audio = document.getElementById("audioFile1");
    var imagen = document.getElementById("imagenControl1");
  if (estadoPlayer == "pause") {
    estadoPlayer = "play"; 
    audio.play();
    imagen.src = "./img/imgPause/hogueraPause.png";
    imagen.className += " giro";
  } else {
    imagen.src = "./img/hoguera.png";
    estadoPlayer = "pause";
    audio.pause();
    imagen.classList.remove("giro");
  }
}

function playPause2() {
  var audio = document.getElementById("audioFile2");
  var imagen = document.getElementById("imagenControl2");
if (estadoPlayer == "pause") {
  estadoPlayer = "play"; 
  audio.play();
  imagen.src = "./img/imgPause/chimeneaPause.png";
  imagen.className += " giro";

} else {
  imagen.src = "./img/chimenea.png";
  estadoPlayer = "pause";
  audio.pause();
  imagen.classList.remove("giro");
}
}

function playPause3() {
  var audio = document.getElementById("audioFile3");
  var imagen = document.getElementById("imagenControl3");
if (estadoPlayer == "pause") {
  estadoPlayer = "play"; 
  audio.play();
  imagen.src = "./img/imgPause/secadorPause.png";
  imagen.className += " giro";
} else {
  imagen.src = "./img/secador.png";
  estadoPlayer = "pause";
  audio.pause();
  imagen.classList.remove("giro");
}
}

function playPause4() {
  var audio = document.getElementById("audioFile4");
  var imagen = document.getElementById("imagenControl4");
if (estadoPlayer == "pause") {
  estadoPlayer = "play"; 
  audio.play();
  imagen.src = "./img/imgPause/microondasPause.png";
  imagen.className += " giro";
} else {
  imagen.src = "./img/microondas.png";
  estadoPlayer = "pause";
  audio.pause();
  imagen.classList.remove("giro");
}
}

function playPause5() {
  var audio = document.getElementById("audioFile5");
  var imagen = document.getElementById("imagenControl5");
if (estadoPlayer == "pause") {
  estadoPlayer = "play"; 
  audio.play();
  imagen.src = "./img/imgPause/calefactorPause.png";
  imagen.className += " giro";
} else {
  imagen.src = "./img/calefactor.png";
  estadoPlayer = "pause";
  audio.pause();
  imagen.classList.remove("giro");
}
}
