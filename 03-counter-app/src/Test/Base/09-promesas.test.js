import { getHeroeByIdAsync } from "../../Base/09-promesas";
import heroes from "../../Data/heroes";



describe('Pruebas en 09-imp-exp.js', () => {
    //SE USA EL DONE PARA CUANDO SON ASINCRONAS
    test('getHeroeByIdAsync Debe de retornar un hereo Asincrono', (done) =>{
        const id = 1;

        getHeroeByIdAsync( id )
            .then( hereo => {
                expect (hereo).toBe( heroes[0]);
                done();
            });
    });

   test('Debe de Obtener un error si el hereo no existe', (done) =>{
    const id1=10;

    getHeroeByIdAsync( id1 )
        .catch( error => {
            expect (error).toBe( 'No se pudo encontrar el héroe');
            done();
        });
    });
});

