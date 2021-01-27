const persona ={
    nombre: 'Tony',
    edad: 45,
    clave : 'Ironman'
};
//es lo mismo el orden, podes ponerlo al reves o el orden que quieras 
const { nombre, edad, clave} = persona;

const retornaPersona = (usuario) => {
    const { nombre, edad, clave} = usuario;
    console.log(edad, clave, nombre);
}

//tambien se puede hacer desectructuradamente
// se le puede poner un = ''  y un valor para poder ingresar un valor por defecto
const retornaPersona2 = ({edad, clave ,nombre, rango='subordinado'}) => {
       console.log(edad, rango, nombre);
}
const retornaContex= ({edad, clave ,nombre, rango='subordinado'}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latLang :{
            lat: 12.1251,
            lon: 15.1552
        }
    }
}

const avenger = retornaPersona2 ( persona );

console.log(avenger);

//const { nombreClave, anios} = retornaContex ( persona );

//console.log(anios, nombreClave);


const { anios, nombreClave, latLang:{lat, lon}} = retornaContex ( persona );

console.log(anios, nombreClave, lat, lon);