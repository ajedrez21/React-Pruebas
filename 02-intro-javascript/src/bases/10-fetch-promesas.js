
//CLAVE TOKEN PARA LA API
const apiKey = 'ICFwmo4K4cipCJLdT28zMKzQYrVImrIJ';

//PETICION DE API, CON FETCH API QUE YA VIENE CON JS
const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

//EL FETCH DEVUELVE UNA PROMESA ENTONCES SE UTILIZA DE ESA FORMA SI DIO ERROR O ENVIO BIEN LOS DATOS
// peticion.then( resp => {
//     resp.json().then( data => {
//         console.log(data);
//     })
// })
// .catch(console.warn)

//SE PUEDE HACER DE ESTA FORMA QUE QUEDA MAS LIMPIO
peticion
    .then( resp => resp.json())
        .then( ({ data }) => {
            console.log(data.images.original.url);
            //LO PONGO EN UNA CONSTANTE Y HAGO DESECTRUCTURACION PARA AGARRAR LA URL
            const {url} = data.images.original;
            console.log(url);
            
            //CREO UNA CODIGO HTML PARA MOSTRARLO EN LA PANTALLA
            const img = document.createElement('img');
            img.src=url;
            document.body.append(img);
        })
    .catch(console.warn)
