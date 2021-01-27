
//CLAVE TOKEN PARA LA API
const apiKey = 'ICFwmo4K4cipCJLdT28zMKzQYrVImrIJ';

//PETICION DE API, CON FETCH API QUE YA VIENE CON JS
const peticion = fetch(`https://criptoya.com/api/bitso/dai/ars/500`);

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
        .then( data  => {
            console.log(data.bid);
            //LO PONGO EN UNA CONSTANTE Y HAGO DESECTRUCTURACION PARA AGARRAR LA URL
            console.log('Precios Dai en Bitso');
            const ask = data.ask;
            console.log('Precio de compra, sin sumar comisiones:',ask);
            const totalAsk = data.totalAsk;
            console.log('Precio de compra final incluyendo las comisiones de transferencia y trade:',totalAsk);
            const bid = data.bid;
            console.log('Precio de venta, sin restar comisiones:', bid);
            const totalBid = data.totalBid;
            console.log('Precio de venta final incluyendo las comisiones de transferencia y trade:',totalBid);
            const time = data.time;
            console.log('Timestamp del momento en que fue actualizada esta cotización:',time);            

            // //CREO UNA CODIGO HTML PARA MOSTRARLO EN LA PANTALLA
            // const img = document.createElement('img');
            // img.src=url;
            // document.body.append(img);
        })
    .catch(console.warn)
