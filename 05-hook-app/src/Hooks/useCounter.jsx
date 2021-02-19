import {useState} from 'react'

export const useCounter = (initialState = 10) => {
    const [state, setstate] = useState(initialState);
    //suma
    const increment = ( factor = 1) =>{
        setstate(state + factor);
    }
    //resta
    const decrement = ( factor = 1) =>{
        setstate(state - factor);
    }
    //suma
    const reset = () =>{
        setstate(initialState);
    }

    return {
       state,
       increment,
       decrement,
       reset
    };
}
