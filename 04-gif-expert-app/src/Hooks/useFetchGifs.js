//el use es un estandar para lo hooks

import { useState,useEffect } from "react"
import { getGifs } from "../Helpers/getGifs";

export const useFetchGifs = (category) => {

    const  [state, setState] = useState({
        data :[],
        loading: true
    });


    useEffect( () => {
        getGifs( category )
            .then( imgs => {
                setTimeout(() => {
                    setState({
                        data: imgs,
                        loading: false
                    });
                    
                }, 3000);
            } );
        //SI VOS PONES UN ARREGLO VACIO A LO ULTIMO LE AVISA AL PROGRAMA QUE ESTO SE VA A EJECUTAR UNA VES, ES UN ARREGLO DE DEPENDENCIA
        //EVITA LA EJECUCION EN EL LINEA Y REITERADAS VECES
    }, [category])

    // setTimeout(() => {
    //     setState({
    //         data: [1,2,3,4,5,6,7,8,9],
    //         loading: false
    //     })
    // }, 3000);
    
    return state;
}