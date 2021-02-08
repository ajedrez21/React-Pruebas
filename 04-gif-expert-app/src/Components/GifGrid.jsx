//import React, { useState, useEffect} from 'react';
import React from 'react';

import { useFetchGifs } from '../Hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    // useEffect( () => {
    //     getGifs( category )
    //         .then( setImages );
    //     //SI VOS PONES UN ARREGLO VACIO A LO ULTIMO LE AVISA AL PROGRAMA QUE ESTO SE VA A EJECUTAR UNA VES, ES UN ARREGLO DE DEPENDENCIA
    //     //EVITA LA EJECUCION EN EL LINEA Y REITERADAS VECES
    // }, [ category])

const { data, loading } = useFetchGifs( category );
    // const getGifs = async() =>{
    //     const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=8&api_key=ICFwmo4K4cipCJLdT28zMKzQYrVImrIJ`
    //     const resp = await fetch( url);
    //     const {data} =  await resp.json();

    //     const gifs = data.map( img =>{
    //         return {
    //             id : img.id,
    //             title: img.title,
    //             url: img.images?.downsized_medium.url
    //         }
    //     });
    //     console.log(gifs);
    //     setImages(gifs);
    // }

    return (
        <>
            <h3> { category } </h3>
            { loading && <p>Loading...</p>}
            <div className="card-grid">           
                {
                    // //CUANDO PONES ENTRE () ES UN RETURN IMPLISITO, Y NO HACE FALTA PONER RETURN , SI LO PONES ENTR {} , SI TENES QUE PONE RETURN 
                    // images.map( ({id , title}) => (
                    //     //OBLIGATORIO PONER EL KEY PARA INDENTIFICAR EL OBJETO
                    //     <li key={ id }>{ title }</li>
                    // ))
                    // images.map( img => (
                    //     <GifGridItem 
                    //         key = { img.id }
                    //         //PERMITE ENVIAR CADA UNA DE LAS PROPIEDADES DE MANERA INDEPENDIENTE
                    //         { ...img }/>
                    // ))
                    data.map( img => (
                        <GifGridItem 
                            key = { img.id }
                            //PERMITE ENVIAR CADA UNA DE LAS PROPIEDADES DE MANERA INDEPENDIENTE
                            { ...img }/>
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid
