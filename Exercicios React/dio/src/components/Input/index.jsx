import React from 'react'

import { IconContainer, InputContainer, InputText } from './styles'; 

const Input = ({leftIcon, name, ...rest}) => {
    return (
        <IconContainer>
            {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
            <InputText {...rest} /> 
        </IconContainer>
    )
}

export { Input };