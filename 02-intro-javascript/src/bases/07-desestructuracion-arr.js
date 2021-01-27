const personajes =['Goku','Vegeta', 'MrPopo'];
// para poder cambiar un nombre por todos lados y sus referencias selecionarlo + f2 y cambiar el nombre.
//aca va a agarrar el primer elemento del arreglo
const [ p1 ] = personajes;
// aca el segundo, dejando un espacio vacio ya va a tomar el segundo elemento
const [ , p2 ] = personajes;

console.log( p1 , p2);

const useState = ( valor ) => {
    return [ valor, () => { console.log('Hola Mundo') }]
}

const [ nombre , setNombre] = useState('Goku');
console.log( nombre);
setNombre();