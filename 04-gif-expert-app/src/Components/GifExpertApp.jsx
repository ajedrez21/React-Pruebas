import React, {useState} from 'react'
import PropTypes from 'prop-types'
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifExpertApp = (props) => {
    const [categories, setCategories] = useState(['One Punch']);
    
    // const handleAdd = () =>{
    //      setCategories([...categories,'HunterXHunter']);
    //     //LO MISMO DE ARRIBA DE OTRA FORMA
    //     //setCategories( cats =>[...cats, 'HunterXHunter']);
    // }
    
    return (
        <>
            <h1 >Gif Expert App</h1>
            {/* <button onClick={ handleAdd }style={{textAlign:'right'}}>Agregar</button>*/}
            <hr /> 
            <AddCategory setCategories={setCategories}/>
            <ol>
                {
                    // categories.map( category => {
                    //     //OBLIGATORIO PONER EL KEY PARA INDENTIFICAR EL OBJETO
                    //     return <li key={ category }>{ category }</li>
                    // })
                    categories.map( category => (
                        <GifGrid 
                        key={category} 
                        category={category}/>
                    ))
                }
            </ol>

        </>
    )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp
