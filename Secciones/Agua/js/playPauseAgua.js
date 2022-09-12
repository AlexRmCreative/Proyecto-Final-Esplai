var estadoPlayer = "pause";
var botonSonando = 0;

//Funcion para que al clicar un boton, se detenga el anterior ya activado
function paraDeGirar() {
  var imagen1 = document.getElementById("imgControlLluvia");
  var imagen2 = document.getElementById("imgControlRio");
  var imagen3 = document.getElementById("imgControlOlas");
  var imagen4 = document.getElementById("imgControlOceano");
  var imagen5 = document.getElementById("imgControlGoteo");
  imagen1.src = "./img/lluvia.png";
  imagen2.src = "./img/rio.png";
  imagen3.src = "./img/ola.png";
  imagen4.src = "./img/oceano.png";
  imagen5.src = "./img/goteo.png";

  imagen1.classList.remove("giro");
  imagen2.classList.remove("giro");
  imagen3.classList.remove("giro");
  imagen4.classList.remove("giro");
  imagen5.classList.remove("giro");
}

//Funcion para cambiar sonido play/pause y la imagen del boton

function playPauseAgua(botonAudio) {
  var audio = document.getElementById("audioFile");
  if (botonSonando != botonAudio){
      
    estadoPlayer = "pause";
  }

  switch (botonAudio) {
    case 1:
      audio.src = "../Agua/sounds/lluvia.mp3";
      var imagen = document.getElementById("imgControlLluvia");
      if (estadoPlayer == "pause") {
        paraDeGirar();
        estadoPlayer = "play";
        botonSonando = 1;
        audio.play();
        audio.loop = true;
        audio.playbackRate = 2;
        imagen.src = "./img/imgPause/lluviaPause.png";
        imagen.className += " giro";
      } else {
        imagen.src = "./img/lluvia.png";
        estadoPlayer = "pause";
        audio.pause();
        imagen.classList.remove("giro");
      }
      break;

    case 2:
      audio.src = "../Agua/sounds/rio.mp3";
      var imagen = document.getElementById("imgControlRio");
      if (estadoPlayer == "pause") {
        paraDeGirar();
        estadoPlayer = "play";
        botonSonando = 2;
        audio.play();
        audio.loop = true;
        audio.playbackRate = 2;
        imagen.src = "./img/imgPause/rioPause.png";
        imagen.className += " giro";
      } else {
        imagen.src = "./img/rio.png";
        estadoPlayer = "pause";
        audio.pause();
        imagen.classList.remove("giro");
      }
      break;

    case 3:
      audio.src = "../Agua/sounds/olas.mp3";
      var imagen = document.getElementById("imgControlOlas");
      if (estadoPlayer == "pause") {
        paraDeGirar();
        estadoPlayer = "play";
        botonSonando = 3;
        audio.play();
        audio.loop = true;
        audio.playbackRate = 2;
        imagen.src = "./img/imgPause/olaPause.png";
        imagen.className += " giro";
      } else {
        imagen.src = "./img/ola.png";
        estadoPlayer = "pause";
        audio.pause();
        imagen.classList.remove("giro");
      }
      break;

    case 4:
      audio.src = "../Agua/sounds/oceano.mp3";
      var imagen = document.getElementById("imgControlOceano");
      if (estadoPlayer == "pause") {
        paraDeGirar();
        estadoPlayer = "play";
        botonSonando = 4;
        audio.play();
        audio.loop = true;
        audio.playbackRate = 2;
        imagen.src = "./img/imgPause/oceanoPause.png";
        imagen.className += " giro";
      } else {
        imagen.src = "./img/oceano.png";
        estadoPlayer = "pause";
        audio.pause();
        imagen.classList.remove("giro");
      }
      break;

    case 5:
      audio.src = "../Agua/sounds/goteo.mp3";
      var imagen = document.getElementById("imgControlGoteo");
      if (estadoPlayer == "pause") {
        paraDeGirar();
        estadoPlayer = "play";
        botonSonando = 5;
        audio.play();
        audio.loop = true;
        audio.playbackRate = 2;
        imagen.src = "./img/imgPause/goteoPause.png";
        imagen.className += " giro";
      } else {
        imagen.src = "./img/goteo.png";
        estadoPlayer = "pause";
        audio.pause();
        imagen.classList.remove("giro");
      }
      break;
  }
}
