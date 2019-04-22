import React from 'react';
import './Char.css';

const char = (props) => {


    return (
        <div className = 'char'
            onClick = {props.click}
        >
            {props.children}
        </div>
    )
}

export default char


// class Component {
//     constructor(element, clickCallback) {
//       this.index = 1
//       this.element = element
//       this.clickCallback = clickCallback
//       this.handleClick = this.handleClick.bind(this)
//     }
//     addListeners() {
//       $(this.element).click(this.handleClick)
//     }
//     handleClick(event) {
//       this.clickCallback(event, this.index)
//     }
//     render() {
     
//     }
//   }