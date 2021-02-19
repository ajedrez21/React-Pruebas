import React from 'react'
import { useCounter } from '../../Hooks/useCounter'

import './Counter.css';

const CounterWithCustomHook = () => {

    const {state,increment,decrement,reset} = useCounter(100);

    return (
        <div  style={{textAlign:'center'}}>
           <h1>Counter with: {state}</h1>
           <hr />
           <button onClick={ () => increment() } className="btn btn-primary"> + 1</button>
           <button onClick={ reset } className="btn btn-success"> RESET</button>
           <button onClick={ () => decrement() } className="btn btn-primary"> - 1</button>
       </div >
    )
}

export default CounterWithCustomHook
