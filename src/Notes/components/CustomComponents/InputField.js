import React from 'react'

import './inputField.css' 


const FormInput = ({handleChange , ...otherProps}) => {

    return(
        <div className="group">
            {otherProps.type === 'textarea' ? (
                <textarea 
                    className='input__field'
                    onChange={handleChange} 
                    {...otherProps}
                />
            ) : (
                <input 
                className='input__field' 
                onChange={handleChange} 
                {...otherProps}
            /> 
            )}
        </div>
    )
}

export default FormInput ;

