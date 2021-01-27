const persona = {
    nombre : 'Tony',
    apellido : 'Start',
    edad : 45
};
//SI LO MANDAS ENTRE LLAVES TE DICE EL NOMBRE DEL OBJETO
console.log( {persona} );
//TABIEN SE PUEDE MANDARLO DE ESTA FORMA PARA VERLO MEJOR
//CUANDO LO MANDAS ENTRE LLAVES TE DIAGRAMA MEJOR EL OBJETO
console.table( {persona} );

//const persona2 = persona //  esta mal hacer esto!
//ASI ESTA BIEN HECHO, HACE UNA COPIA DEL OBJETO
const persona2 = { ...persona};
persona2.nombre = 'Peter';


console.table({ persona })

console.table({ persona2 })