
// BUENAS PRACTICAS PARA FUNCIONES

const saludar = function( nombre ){
    return `Hola, ${ nombre }`;
}

//FUNCION EN FLECHA TIENE MAS VENTAJAS
const saludar2 = ( nombre ) =>{
    return `Hola, ${ nombre }`;
}

//TAMBIEN SE PUEDE HACER DE ESTA FORMA
const saludar3 = ( nombre ) => `Hola, ${ nombre }`;

// SI NO SE QUIERE CON ARGUMENTOS
const saludar4 = ( ) => `Hola Mundo !`;

// PARA CUANDO VOS TENES QUE ENTREGAR UN OBJETO EN UNA FUNCION JS, SE LO PONE ENTRE ()
// CUANDO LE SACAMOS EL RETURN Y LO PONEMOS CON ELOS (), SE LLAMA PONERLO IMPLICITO
const getUser = () =>({
    uId: '00001',
    uNombre: 'Maximiliano',
    uApellido: 'Boggio' 
})
let user = getUser();


console.log( saludar('MAXI') );
console.log( saludar2('DANIEL') );
console.log( saludar3('BOGGIO') );
console.log( saludar4() );
console.log( getUser() );
console.table( {user} );