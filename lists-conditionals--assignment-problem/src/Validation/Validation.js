import React from 'react';

const validaton = (props) => {

    let str = props.input > 5 ?  'Text too long' : 'Text too short';
    return (
        <p>{str}</p>
    )

}

export default validaton