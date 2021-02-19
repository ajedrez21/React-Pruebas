import React, {useEffect, useState} from 'react';
import './effects.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    useEffect(() =>{
        console.log('hey!');
    },[]);

    useEffect(() =>{
        console.log('nombre cambio');
    },[name]);

    useEffect(() =>{
        console.log('email cambio');
    },[email]);

    const handleInputChange = ({target}) => {
       
        setFormState({
            ...formState,
          [ target.name]: target.value,
        })
    }

    return (
        <div>
            <h1>useEffect</h1>
            <hr />
            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="tu nombre"
                    autoComplete= "off"
                    value = { name }
                    onChange= {handleInputChange}
                />
            </div>
            <div className="form-group">
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete= "off"
                    value = { email }
                    onChange= {handleInputChange}
                />
            </div>
        </div>
    )
}

export default SimpleForm
