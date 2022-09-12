var estadoPlayer = "pause";
var botonSonando = 0;

//Funcion para que al clicar un boton, se detenga el anterior ya activado
function paraDeGirar() {
  var imagen1 = document.getElementById("imgControlHoguera");
  var imagen2 = document.getElementById("imgControlChimenea");
  var imagen3 = document.getElementById("imgControlSecador");
  var imagen4 = document.getElementById("imgControlMicroondas");
  var imagen5 = document.getElementById("imgControlCalefactor");
  imagen1.src = "./img/hoguera.png";
  imagen2.src = "./img/chimenea.png";
  imagen3.src = "./img/Secador.png";
  imagen4.src = "./img/microondas.png";
  imagen5.src = "./img/calefactor.png";

  imagen1.classList.remove("giro");
  imagen2.classList.remove("giro");
  imagen3.classList.remove("giro");
  imagen4.classList.remove("giro");
  imagen5.classList.remove("giro");
}

//Funcion para cambiar sonido play/pause y la imagen del boton

function playPauseCalido(botonAudio) {
  var audio = document.getElementById("audioFile");
  if (botonSonando != botonAudio){
      
    estadoPlayer = "pause";
  }

  switch (botonAudio) {
    case 1:
      audio.src = "../Calido/sounds/hoguera.mp3";
      var imagen = document.getElementById("imgControlHoguera");
      if (estadoPlayer == "pause") {
        paraDeGirar();
        estadoPlayer = "play";
        botonSonando = 1;
        audio.play();
        audio.loop = true;
        audio.playbackRate = 2;
        imagen.src = "./img/imgPause/hogueraPause.png";
        imagen.className += " giro";
      } else {
        imagen.src = "./img/hoguera.png";
        estadoPlayer = "pause";
        audio.pause();
        imagen.classList.remove("giro");
      }
      break;

    case 2:
      audio.src = "../Calido/sounds/chimenea.mp3";
      var imagen = document.getElementById("imgControlChimenea");
      if (estadoPlayer == "pause") {
        paraDeGirar();
        estadoPlayer = "play";
        botonSonando = 2;
        audio.play();
        audio.loop = true;
        audio.playbackRate = 2;
        imagen.src = "./img/imgPause/chimeneaPause.png";
        imagen.className += " giro";
      } else {
        imagen.src = "./img/chimenea.png";
        estadoPlayer = "pause";
        audio.pause();
        imagen.classList.remove("giro");
      }
      break;

    case 3:
      audio.src = "../Calido/sounds/secador.mp3";
      var imagen = document.getElementById("imgControlSecador");
      if (estadoPlayer == "pause") {
        paraDeGirar();
        estadoPlayer = "play";
        botonSonando = 3;
        audio.play();
        audio.loop = true;
        audio.playbackRate = 2;
        imagen.src = "./img/imgPause/secadorPause.png";
        imagen.className += " giro";
      } else {
        imagen.src = "./img/secador.png";
        estadoPlayer = "pause";
        audio.pause();
        imagen.classList.remove("giro");
      }
      break;

    case 4:
      audio.src = "../Calido/sounds/microondas.mp3";
      var imagen = document.getElementById("imgControlMicroondas");
      if (estadoPlayer == "pause") {
        paraDeGirar();
        estadoPlayer = "play";
        botonSonando = 4;
        audio.play();
        audio.loop = true;
        audio.playbackRate = 2;
        imagen.src = "./img/imgPause/microondasPause.png";
        imagen.className += " giro";
      } else {
        imagen.src = "./img/microondas.png";
        estadoPlayer = "pause";
        audio.pause();
        imagen.classList.remove("giro");
      }
      break;

    case 5:
      audio.src = "../Calido/sounds/calefactor.mp3";
      var imagen = document.getElementById("imgControlCalefactor");
      if (estadoPlayer == "pause") {
        paraDeGirar();
        estadoPlayer = "play";
        botonSonando = 5;
        audio.play();
        audio.loop = true;
        audio.playbackRate = 2;
        imagen.src = "./img/imgPause/calefactorPause.png";
        imagen.className += " giro";
      } else {
        imagen.src = "./img/calefactor.png";
        estadoPlayer = "pause";
        audio.pause();
        imagen.classList.remove("giro");
      }
      break;
  }
}
