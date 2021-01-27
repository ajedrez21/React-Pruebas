//import { heroes } from './data/heroes';
//import { heroes } from './data/heroes'

//Esto es una forma para mandar por defecto una y llamar a la otra exportacion
//import heroes , { owners } from "./data/heroes";

//Esta forma para mi la mejor que pode mandar todo.
import { heroes, owners } from "../data/heroes";

//EL FIND PERMTE ENCONTRAR 1 ELEMENTO
const getHereosById = (id) => heroes.find((heroes) => heroes.id === id);
 
//console.log( getHereosById(2) );

//EL FILTER PERMITE TRAER VARIOS ELEMENTOS DEPENDIENDO LA CONDICION
const getHeroesByOwner = (owner) => heroes.filter((heroes) => heroes.owner === owner);
 
//console.log( getHeroesByOwner('DC') );

//console.log( owners );

export{
    getHereosById,
    getHeroesByOwner
}