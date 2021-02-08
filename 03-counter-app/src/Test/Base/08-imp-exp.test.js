import { getHeroeById , getHeroesByOwner} from "../../Base/08-imp-exp";
import heroes from "../../Data/heroes";


describe('Pruebas en 08-imp-exp.js', () => {

    test('getHeroeById Debe de retornar un hereo por id', () =>{
        const id=1;
        const hereo = getHeroeById(id);
        const hereoTest = heroes.find(h => h.id = id);

        expect( hereo).toEqual( hereoTest);

    })

    test('debe de retornar un undefined si el hereo no existe', () =>{
        const id=100;
        const hereo = getHeroeById(id);

        expect( hereo).toBe( undefined);

    })

    test('debe de retornar un arreglo con los heroes de DC', () =>{
        const owner='DC';
        const hereo = getHeroesByOwner(owner);
        
        const hereoTest = heroes.filter(h => h.owner === owner);

        expect( hereo).toEqual( hereoTest);

    })

    test('debe de corroborar que haya la cantidad de hereos de un owener', () =>{
        const owner='Marvel';
        const hereo = getHeroesByOwner(owner);        
        const cant = 2;

        expect( hereo.length ).toBe(cant);

    })

})