console.log("HOLA MUNDO");
const nombre = 'MAXI';
const apellido = 'BOGGIO';

const nombreCompleto = nombre + ' ' + apellido;

console.log(nombreCompleto);
// TEMPLATE STRING `` , SE PUEDE DEFINIR LAS VARIALES Y CONSTANTES ADENTRO, LAS PODES INVOCAR
// TABMIEN TOMA TODO LO QUE REALICES DENTRO, SALTOS DE LINEA ESPACIOS , ETC.
const nomCompleto = `${nombre} ${apellido}`; 
console.log(nomCompleto);

function getSaludo(nombre){
    return 'Hola ' + nombre;
}
// SE PUEDEN LLAMAR A FUNCIONES TAMBIEN 
console.log (`Este es un texto: ${ getSaludo(nombre)}`);