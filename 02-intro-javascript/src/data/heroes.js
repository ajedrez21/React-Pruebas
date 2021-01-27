 const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];
const owners = ['DC','Marvel'];

//una forma siemple de exportar
//export const owners = ['DC','Marvel'];

//forma de exportar por defecto
//export default heroes;

//Otra forma de hacerlo todo junto
export{
    heroes,
    owners
}
