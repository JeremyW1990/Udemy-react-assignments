import React from 'react';
import './UserOutput.css';

function userOutput (props){
    return (
        <div className = 'UserOutput'>
            <p>{props.username}</p>
            <p>p2</p>
        </div>
    );
    
}

export default userOutput;
