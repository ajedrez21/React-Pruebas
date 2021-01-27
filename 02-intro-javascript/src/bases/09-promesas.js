import { getHereosById } from "./bases/08-import-export";

// const promesas = new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             const p1 = getHereosById(2);
//             //Para poder enviar la informacion de la promesa tenes que usar resolve
//             resolve( p1 );
//             //Para enviar si huvo un error a la hora de traer un archivo
//             //reject ('No se pudo encontrar el Hereo');
//         }, 3000)
//  });

//  promesas.then( (p1) => {
//      console.log('Hereo:', p1);
//  })
//  .catch(error => console.warn (error));

const getHereosByIdAsync = ( id ) =>{
    //O DE ESTA FORMA
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const p1 = getHereosById( id );
            //SI LO DEJAS VACIO TE TOMA QUE EXISTE SI ENTRA, SINO TE VA A UNDEFINED 
            if (p1 ){
                //Para poder enviar la informacion de la promesa tenes que usar resolve
                resolve( p1 );
            }
            else{
                //Para enviar si huvo un error a la hora de traer un archivo
                reject('No se pudo encontrar el Hereo');
            }
          
            //Para enviar si huvo un error a la hora de traer un archivo
            //reject ('No se pudo encontrar el Hereo');
        }, 3000)
    });
    //se puede hacer asi
   // return promesas;
}
//ESTA ES UNA FORMA DE HACERLO
// getHereosByIdAsync(10)
//     .then(p1 => console.log('Hereo:', p1))
//     .catch(error => console.warn (error))

//ESTA ES OTRA FORMA, POR DEFECTO TE TOMA EL PRIMER ARGUMENTO QUE TE LLEGA LA FUNCION QUE PONGAS
getHereosByIdAsync(2)
    .then( console.log )
    .catch( console.warn )
