import React from 'react';
import '../stylesheets/button.css'

function Button(props){
    const isOperator = valor => { // valor es el parametro
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

    return (
        <div className={`button-container ${isOperator(props.children) ? 'operator' : null}`}
        onClick={() => props.handleClick(props.children)}>
            {props.children}
        </div>
    );
};

export default Button;