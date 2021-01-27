
// ESTA ES UNA FUNCION NORMAL SINCRONA
// const getImage = () =>{
//     return 'www.google.com.ar';
// }

// console.log(getImage());

//SE PUEDE CONVETIR EN UNA FUNCION ASINCRONICA, Y SE PUEDE UTILIZAR LAS PROMESAS
const getImage = async () => {

        try {
            const apiKey = 'ICFwmo4K4cipCJLdT28zMKzQYrVImrIJ';
            //el await te dice que termine una promesa antes de seguir con la ejecucion del codigo
            //para poder trabajar con los await se necesita el async antes para que funcione
            const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
            const { data } = await resp.json();
            const {url} = data.images.original;
    
            const img = document.createElement('img');
            img.src=url;
            document.body.append(img);
        } catch (error) {
            //MANEJO DEL ERROR
            console.error(error);
        }
      
}

getImage();


