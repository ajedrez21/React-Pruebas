
//DESCRIBE GENERICO PARA TODAS LAS PRUEBAS
describe('Pruebas en el archivo demo.test.js',()=>{
    //PRUEBAS DE TEST
    test( 'debe de ser iguales los string', () => {
        // 1.Inicializacion (preparacion de lo que voy a hacer)
        const mensaje = 'Hola mundo';
        //2. Estimulo
        const mensaje2 = `Hola mundo`;
        //3. Observar el comportamiento
        expect (mensaje).toBe( mensaje2 );
   })
});
