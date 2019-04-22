import React from 'react';
import './Char.css';

const char = (props) => {
    return (
        <div className = 'char'
            onClick = {props.click(props.children)}
        >
            {props.children}
        </div>
    )
}

export default char