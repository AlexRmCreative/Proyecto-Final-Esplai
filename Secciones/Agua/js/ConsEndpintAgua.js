// const url = "http://localhost:9090/section/3/media";
		
// async function fetchMoviesJSON() {
// 				const response = await fetch(url);
// 				const jsonResponse = await response.json();
// 				return jsonResponse;
			}
			// fetchMoviesJSON().then(json => {
			// 	console.log(json);
			// 	console.log(json.sectionName);
			// 	console.log(json.media);
			// 	for(let i = 0; i < json.media.length; i++){
			// 		// playPauseAgua(i+1, json.media[i].urls);
			// 		// playPauseAgua(1, json.media[i].urls);
			// 	}
			// 	for(const element of json.media){
			// 		// console.log(element.urls);
			// 		document.querySelector("#audioFile > source").src='https://cdn.pixabay.com/download/audio/2022/08/31/audio_419263fc12.mp3';
			// 	}
			// });

		/*	const cargarAudios = async() => {

			try{
			const respuesta = await fetch('http://localhost:9090/section/3/media');

			console.log(respuesta);

			const  datos = await respuesta.json();

			let audiosAgua = '';
			datos.results.forEach(audioAgua => {
				audiosAgua += 
				<h4>${audioAgua.description}</h4>;
			});

			document.getElementById('text-center').innerHTML = audiosAgua
			//console.log(datos.description);
			} catch(error){
				console.log(error);
			}
			}

			cargarAudios();*/
