
import React from 'react';
import '@testing-libreary/jest-dom';
import { shallow } from 'enzyme';
import {createSerializer} from 'enzyme-to-json';
import PruebaApp from './Component/PruebaApp';

describe('Pruebas en <PruebaApp />', () =>{

    test('debe de mostrar <PruebaApp /> correctamente', () =>{
        const saludo = 'Hola, soy Goku';
        const wrapper = shallow( <PruebaApp  prue = {saludo} />);

        expect ( wrapper ).toMatchInlineSnapshot();
    });
});