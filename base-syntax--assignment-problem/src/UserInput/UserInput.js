import React from 'react';

function userInput (props){
    return (
        <input onChange = {props.onchange} value = {props.username}></input>
    );
    
}

export default userInput;
