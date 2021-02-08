import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({valor}) =>{
   
    const [counter, setCounter] = useState (valor);
    const funClickAdd = () =>{
     
        setCounter(counter + 1)
        //DE LA OTRA FORMA ES ESTO
        //return ()=>console.log('HOLA MUNDO');
    }
    const funClickLes = () =>{
      
        setCounter(counter - 1)
        //DE LA OTRA FORMA ES ESTO
        //return ()=>console.log('HOLA MUNDO');
    }
    const funClickRest = () =>{
        setCounter(valor)
        //DE LA OTRA FORMA ES ESTO
        //return ()=>console.log('HOLA MUNDO');
    }

    return (
        <div style={{textAlign: 'center'}}> 
            <h1>Counter App</h1>
            <p>{valor}</p>
            <h2>Sumnum !</h2>
            <p>{counter}</p>
            {/*ESTA ES UNA FORMA DE LLAMAR A UNA FUNCION
             <button onClick={ funClick() }>+1</button> */}
            {/* //ESTA ES LA FORMA MAS USADA Y LIMPIA */}
            <button onClick={ funClickAdd }>+1</button>
            <button onClick={ funClickRest }>Resetear</button>
            <button onClick={ funClickLes }>-1</button>
        </div>
    );
}

CounterApp.propTypes ={
    valor : PropTypes.number.isRequired
}
export default CounterApp;
