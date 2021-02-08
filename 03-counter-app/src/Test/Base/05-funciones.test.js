import { getUser , getUsuarioActivo} from '../../Base/05-funciones';


describe('Pruebas en 05-funciones.js', () => {

    test('getUser debe de retornar un Objeto', () =>{
        const userTest = { 
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();

        //console.log(user);
        //expect( saludo ).toBe( 'Hola ' + nombre + "!!");

        expect(user).toEqual(userTest);
    })

    //getUsuarioActivo debe de retornar un objeto
    test('getUsuarioActivo debe de retornar un Objeto', () =>{
        const nombre='Maxi';
        const userTest = { 
            uid: 'ABC567',
            username: nombre
        }
        const user = getUsuarioActivo(nombre);

        //console.log(user);
        //expect( saludo ).toBe( 'Hola ' + nombre + "!!");

        expect(user).toEqual(userTest);
    })
})