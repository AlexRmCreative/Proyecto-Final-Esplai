/* Llamada a la API 🎹🔥 */
const mensajesSalud = [];
const descriptions = [];
const url = "http://localhost:9090/section/5/media";

async function fetchMensajesJSON() {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  return jsonResponse;
}

fetchMensajesJSON().then((json) => {
  for (const element of json.media) {
    mensajesSalud.push(element.urls);
    descriptions.push(element.description);
  }
});

var maxNotiNumber = [0,0,0,0,0,0];
var notificacionNumber = [0,0,0,0,0,0];
function generarNotificacion(idType = ""){
    /*document.querySelector("div .notifySpace").appendChild(notificacion);
    notificacion.className = "notificacionStyle";
    document.querySelector("div .notificacionStyle").appendChild(contentNotificacion);
    contentNotificacion.className = "notificacionContent";
    document.querySelector(".notificacionContent").innerHTML = "MI NOMBRE ES ALEJANDRO lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    */
    var notificador = document.querySelectorAll(".notifySpace"); //4
    let ids = ["Alimentacion", "Ejercicio", "Mindfulness", "Yoga", "Tecnologia", "Introduccion"];
    
    if(idType == ids[0] && maxNotiNumber[0] <= 5)
    {
        maxNotiNumber[0]++;
        setTimeout(() => {
            maxNotiNumber[0]--;
        }, 12000);
    }
    if(idType == ids[1] && maxNotiNumber[1] <= 5)
    {
        maxNotiNumber[1]++;
        setTimeout(() => {
            maxNotiNumber[1]--;
        }, 12000);
    }
    if(idType == ids[2] && maxNotiNumber[2] <= 5)
    {
        maxNotiNumber[2]++;
        setTimeout(() => {
            maxNotiNumber[2]--;
        }, 12000);
    }
    if(idType == ids[3] && maxNotiNumber[3] <= 5)
    {
        maxNotiNumber[3]++;
        setTimeout(() => {
            maxNotiNumber[3]--;
        }, 12000);
    }
    if(idType == ids[4] && maxNotiNumber[4] <= 5)
    {
        maxNotiNumber[4]++;
        setTimeout(() => {
            maxNotiNumber[4]--;
        }, 12000);
    }
    if(idType == ids[5] && maxNotiNumber[5] <= 5)
    {
        maxNotiNumber[5]++;
        setTimeout(() => {
            maxNotiNumber[5]--;
        }, 12000);
    }


    for (const element of notificador) {
        if(maxNotiNumber[0] <= 5){
            if(idType == ids[0]){
                if(element.id == ids[0]){
                    const divNotificacion = document.createElement('div');
                    const parrafoContenido = document.createElement('p');
                    setTimeout(() => {
                        switch(notificacionNumber[0]){
                            
                            case 0: element.removeChild(divNotificacion); break;
                            
                            case 1: element.removeChild(divNotificacion); break;
                            case 2: element.removeChild(divNotificacion); break;
                            case 3: element.removeChild(divNotificacion); break;
                            case 4: element.removeChild(divNotificacion); break;
                        }
                    }, 12000);
                    switch(notificacionNumber[0]){
                        case 0: parrafoContenido.textContent = "Me llamo Alejandro"; break;
                        case 1: parrafoContenido.textContent = "Y me gusta el chocolate"; break;
                        case 2: parrafoContenido.textContent = "Pasear me despeja la mente"; break;
                        case 3: parrafoContenido.textContent = "Y bailar menea mi cocotan"; break;
                        case 4: parrafoContenido.textContent = "LO QUE ME GUSTA PERREAAAAAAR"; break;
                    }
                    element.appendChild(divNotificacion);
                    divNotificacion.appendChild(parrafoContenido);
                    
                    divNotificacion.className = "notificacionStyle notiStyleNaranja";
                    parrafoContenido.className = "notificacionContent notiContNaranja";

                    notificacionNumber[0]++;
                    if(notificacionNumber[0] >= 5) {
                        notificacionNumber[0] = 0;
                    }
                }
            }
        }

        //Ejercicio
        if(maxNotiNumber[1] <= 5){
            if(idType == ids[1]){
                if(element.id == ids[1]){
                    const divNotificacion = document.createElement('div');
                    const parrafoContenido = document.createElement('p');
                    setTimeout(() => {
                        switch(notificacionNumber[1]){
                            case 0: element.removeChild(divNotificacion); break;
                            case 1: element.removeChild(divNotificacion); break;
                            case 2: element.removeChild(divNotificacion); break;
                            case 3: element.removeChild(divNotificacion); break;
                            case 4: element.removeChild(divNotificacion); break;
                        }
                    }, 12000);
                    switch(notificacionNumber[1]){
                        case 0: parrafoContenido.textContent = "Me llamo ALEJANDRO AJISDHASDGASDHG"; break;
                        case 1: parrafoContenido.textContent = "Y me gusta el chocolate"; break;
                        case 2: parrafoContenido.textContent = "Pasear me despeja la mente"; break;
                        case 3: parrafoContenido.textContent = "Y bailar menea mi cocotan"; break;
                        case 4: parrafoContenido.textContent = "LO QUE ME GUSTA PERREAAAAAAR"; break;
                    }
                    element.appendChild(divNotificacion);
                    divNotificacion.appendChild(parrafoContenido);
                    
                    divNotificacion.className = "notificacionStyle notiStyleCerceta";
                    parrafoContenido.className = "notificacionContent notiContCerceta";

                    notificacionNumber[1]++;
                    if(notificacionNumber[1] >= 5) {
                        notificacionNumber[1] = 0;
                    }
                }
            }
        }

        //Mindfulness
        if(maxNotiNumber[2] <= 5){
            if(idType == ids[2]){
                if(element.id == ids[2]){
                    const divNotificacion = document.createElement('div');
                    const parrafoContenido = document.createElement('p');
                    setTimeout(() => {
                        switch(notificacionNumber[2]){
                            case 0: element.removeChild(divNotificacion); break;
                            case 1: element.removeChild(divNotificacion); break;
                            case 2: element.removeChild(divNotificacion); break;
                            case 3: element.removeChild(divNotificacion); break;
                            case 4: element.removeChild(divNotificacion); break;
                        }
                    }, 12000);
                    switch(notificacionNumber[2]){
                        case 0: parrafoContenido.textContent = "Me llamo manolo"; break;
                        case 1: parrafoContenido.textContent = "Y me gusta el chocolate"; break;
                        case 2: parrafoContenido.textContent = "Pasear me despeja la mente"; break;
                        case 3: parrafoContenido.textContent = "Y bailar menea mi cocotan"; break;
                        case 4: parrafoContenido.textContent = "LO QUE ME GUSTA PERREAAAAAAR"; break;
                    }
                    element.appendChild(divNotificacion);
                    divNotificacion.appendChild(parrafoContenido);
                    
                    divNotificacion.className = "notificacionStyle notiStyleAmarillo";
                    parrafoContenido.className = "notificacionContent notiContAmarillo";

                    notificacionNumber[2]++;
                    if(notificacionNumber[2] >= 5) {
                        notificacionNumber[2] = 0;
                    }
                }
            }
        }

        //Yoga
        if(maxNotiNumber[3] <= 5){
            if(idType == ids[3]){
                if(element.id == ids[3]){
                    const divNotificacion = document.createElement('div');
                    const parrafoContenido = document.createElement('p');
                    setTimeout(() => {
                        switch(notificacionNumber[3]){
                            case 0: element.removeChild(divNotificacion); break;
                            case 1: element.removeChild(divNotificacion); break;
                            case 2: element.removeChild(divNotificacion); break;
                            case 3: element.removeChild(divNotificacion); break;
                            case 4: element.removeChild(divNotificacion); break;
                        }
                    }, 12000);
                    switch(notificacionNumber[3]){
                        case 0: parrafoContenido.textContent = "Me llamo manolo"; break;
                        case 1: parrafoContenido.textContent = "Y me gusta el chocolate"; break;
                        case 2: parrafoContenido.textContent = "Pasear me despeja la mente"; break;
                        case 3: parrafoContenido.textContent = "Y bailar menea mi cocotan"; break;
                        case 4: parrafoContenido.textContent = "LO QUE ME GUSTA PERREAAAAAAR"; break;
                    }
                    element.appendChild(divNotificacion);
                    divNotificacion.appendChild(parrafoContenido);
                    
                    divNotificacion.className = "notificacionStyle notiStyleRosa";
                    parrafoContenido.className = "notificacionContent notiContRosa";

                    notificacionNumber[3]++;
                    if(notificacionNumber[3] >= 5) {
                        notificacionNumber[3] = 0;
                    }
                }
            }
        }

        //Tecnologia
        if(maxNotiNumber[4] <= 5){
            if(idType == ids[4]){
                if(element.id == ids[4]){
                    const divNotificacion = document.createElement('div');
                    const parrafoContenido = document.createElement('p');
                    setTimeout(() => {
                        switch(notificacionNumber[4]){
                            case 0: element.removeChild(divNotificacion); break;
                            case 1: element.removeChild(divNotificacion); break;
                            case 2: element.removeChild(divNotificacion); break;
                            case 3: element.removeChild(divNotificacion); break;
                            case 4: element.removeChild(divNotificacion); break;
                        }
                    }, 12000);
                    switch(notificacionNumber[4]){
                        case 0: parrafoContenido.textContent = "Me llamo manolo"; break;
                        case 1: parrafoContenido.textContent = "Y me gusta el chocolate"; break;
                        case 2: parrafoContenido.textContent = "Pasear me despeja la mente"; break;
                        case 3: parrafoContenido.textContent = "Y bailar menea mi cocotan"; break;
                        case 4: parrafoContenido.textContent = "LO QUE ME GUSTA PERREAAAAAAR"; break;
                    }
                    element.appendChild(divNotificacion);
                    divNotificacion.appendChild(parrafoContenido);
                    
                    divNotificacion.className = "notificacionStyle notiStyleAzul";
                    parrafoContenido.className = "notificacionContent notiContAzul";

                    notificacionNumber[4]++;
                    if(notificacionNumber[4] >= 5) {
                        notificacionNumber[4] = 0;
                    }
                }
            }
        }

        //Introduccion

        if(maxNotiNumber[5] <= 5){
            if(idType == ids[5]){
                if(element.id == ids[5]){
                    const divNotificacion = document.createElement('div');
                    const parrafoContenido = document.createElement('p');
                    setTimeout(() => {
                        switch(notificacionNumber[5]){
                            case 0: element.removeChild(divNotificacion); break;
                            case 1: element.removeChild(divNotificacion); break;
                            case 2: element.removeChild(divNotificacion); break;
                            case 3: element.removeChild(divNotificacion); break;
                            case 4: element.removeChild(divNotificacion); break;
                        }
                    }, 12000);
                    switch(notificacionNumber[5]){
                        case 0: parrafoContenido.textContent = "Me llamo manolo"; break;
                        case 1: parrafoContenido.textContent = "Y me gusta el chocolate"; break;
                        case 2: parrafoContenido.textContent = "Pasear me despeja la mente"; break;
                        case 3: parrafoContenido.textContent = "Y bailar menea mi cocotan"; break;
                        case 4: parrafoContenido.textContent = "LO QUE ME GUSTA PERREAAAAAAR"; break;
                    }
                    element.appendChild(divNotificacion);
                    divNotificacion.appendChild(parrafoContenido);
                    
                    divNotificacion.className = "notificacionStyle notiStyleBlanco";
                    parrafoContenido.className = "notificacionContent notiContBlanco";

                    notificacionNumber[5]++;
                    if(notificacionNumber[5] >= 5) {
                        notificacionNumber[5] = 0;
                    }
                }
            }
        }
    }
}
