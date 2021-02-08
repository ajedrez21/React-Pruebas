//ESTA ES OTRA FORMA DE HACERLO
//import React, { Fragment } from 'react';
import React from 'react';
//PARA TRAER PROPIEDADES LO QUE SE ENVIA
import PropTypes from 'prop-types';


//PARA MANDAR PROPIEDADES DESDE EL PADRE, SE PUEDE DEFINIR TAMBIEN UN VALOR POR DEFECTO
const PruebaApp = ({prue , subt}) =>{
    const saludar= prue;
    console.log(prue);
    //PARA RETORNAR VARIOS DATOS SE LO PONE ENTRE () PARA QUE LO TOME COMO OBJETO    
    return (
        //SIEMPRE ENVOLVER EL CODIGO EN UNA ETIQUETA DIV O <> O PONER Fracment e importarlo
        // <Fragment></Fragment>
        <div style={{textAlign: 'center'}}>
            <h1>{saludar}</h1>
            <p>{subt}</p>
        </div>
    );
}   
//PERMITE DEFINIR LAS PROPIEDADES DE LO QUE SE ENVIA Y DE QUE TIPO VAN A SER Y SI VAN A SER REQUERIDAS O NO
PruebaApp.propTypes ={
    prue : PropTypes.string.isRequired
}
//PERMITE DEJAR LAS PROPS QUE TE LLEGAN CON UN VALOR POR DEFECTO
PruebaApp.defaultProps ={
    subt: 'Soy el subtitulo !',
}
export default PruebaApp;