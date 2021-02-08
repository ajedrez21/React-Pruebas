import { retornaArreglo } from "../../Base/07-deses-arr"


describe('Pruebas en 07-funciones.js', () => {

    test('retornaArreglo debe de retornar un string y un numero', () =>{
       const [letra , num ] = retornaArreglo();

       //CORROBORRA QUE SEA IGUAL A LO QUE ESTOY PONIENDO
       expect (letra).toBe('ABC');
       //SE PUEDE CORROBORAR QUE SE DE UN TIPO LO QUE ESTA DEVOLVIENDO
       expect (typeof letra).toBe('string');

       expect (num).toBe(123);
       expect (typeof num).toBe('number');
    })

})