var ultimIntroVisto = -1;
var nIntros = 2;

var ultimEjerVisto = -1;
var nEjer = 4;

var ultimYogaVisto = -1;
var nYoga = 4;

var ultimAlimentacionVisto = -1;
var nAlimentacion = 4;

var ultimTecnologiaVisto = -1;
var nTecnologia = 3;

var ultimMindfulnessVisto = -1;
var nMindfulness = 2;

$(function () {
  $(".btn-primary").on("click", function () {
    ultimIntroVisto++;
    if (ultimIntroVisto == nIntros) {
      ultimIntroVisto = 0;
    }
    $.notify(
      {
        message: introduccion[ultimIntroVisto],
      },
      {
        type: "primary",
        allow_dismiss: true,
        delay: 10000,
        placement: {
          from: "center",
          align: "left",
        },
      }
    );
  });
  $(".btn-danger").on("click", function () {
    ultimEjerVisto++;
    if (ultimEjerVisto == nEjer) {
      ultimEjerVisto = 0;
    }
    $.notify(
      {
        title: "<strong>Ejercicio</strong>",
        message: ejercicio[ultimEjerVisto],
        icon: "fas fa-check",
      },
      {
        type: "danger",
        allow_dismiss: true,
        delay: 10000,
        placement: {
          from: "top",
          align: "right",
        },
      }
    );
  });
  $(".btn-warning").on("click", function () {
    ultimYogaVisto++;
    if (ultimYogaVisto == nYoga) {
      ultimYogaVisto = 0;
    }
    $.notify(
      {
        title: "<strong>Yoga</strong>",
        message: yoga[ultimYogaVisto],
        icon: "fas fa-check",
      },
      {
        type: "warning",
        allow_dismiss: true,
        delay: 3000,
        placement: {
          from: "top",
          align: "center",
        },
      }
    );
  });
  $(".btn-success").on("click", function () {
    ultimAlimentacionVisto++;
    if (ultimAlimentacionVisto == nAlimentacion) {
        ultimAlimentacionVisto = 0;
    }
    $.notify(
      {
        title: "<strong>Alimentación</strong>",
        message: alimentacion[ultimAlimentacionVisto],
        icon: "fas fa-check",
      },
      {
        type: "success",
        allow_dismiss: true,
        delay: 3000,
        placement: {
          from: "bottom",
          align: "left",
        },
      }
    );
  });
  $(".btn-info").on("click", function () {
    ultimTecnologiaVisto++;
    if(ultimTecnologiaVisto == nTecnologia) {
        ultimTecnologiaVisto = 0;
    }
    $.notify(
      {
        title: "<strong>Tecnologia</strong>",
        message: tecnologia[ultimTecnologiaVisto],
        icon: "fas fa-check",
      },
      {
        type: "info",
        allow_dismiss: true,
        delay: 3000,
        placement: {
          from: "bottom",
          align: "right",
        },
      }
    );
  });
  $(".btn-secondary").on("click", function () {
    ultimMindfulnessVisto++;
    if(ultimMindfulnessVisto == nMindfulness){
        ultimMindfulnessVisto = 0;
    }
    $.notify(
      {
        title: "<strong>Mindfulness</strong>",
        message: mindfulness[ultimMindfulnessVisto],
        icon: "fas fa-check",
      },
      {
        type: "secondary",
        allow_dismiss: true,
        delay: 3000,
        placement: {
          from: "bottom",
          align: "center",
        },
      }
    );
  });
});
