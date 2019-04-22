import React, { Component } from 'react';
import Validation from './Validation/Validation'
import Char from './Char/Char'
import './App.css';

class App extends Component {

  state = {
    inputValue: '',
    inputLength : 0,
    charList: []
  }

  inputChangeHandler = (e) => {
    console.log(e.target.value)
    const tempCharList = [];
    for (let v of e.target.value) {
      if (tempCharList.indexOf(v) === -1) tempCharList.push(v);
    }

    this.setState({
      inputValue: e.target.value,
      inputLength : e.target.value.length,
      charList: tempCharList
    });
  }

  charClickHandler = (event , value) => {
    
    console.log('charClickHandler' ,event, value)
    let tempInput = this.state.inputValue;
    while (tempInput.indexOf(value) > -1){
      let tempInputArray = tempInput.split('');
      tempInputArray.splice(tempInputArray.indexOf(value), 1);
      tempInput = tempInputArray.join('');
    }
    const tempCharList = this.state.charList.slice();
    tempCharList.splice(tempCharList.indexOf(value),1);
    this.setState({
      inputValue : tempInput,
      inputLength : tempInput.length,
      charList: tempCharList
    });
  }

  render() {

    // const charListComponent = this.state.charList.map((char) => {
    //   return (
    //     <Char 
    //       key = {char} 
    //       click = {()=> {this.charClickHandler(char)}}
    //     >
    //       {char}
    //     </Char>
    //   )
    // })

    const charListComponent = [];
    for (var char of this.state.charList) {
      // const CharComponent = (
      //   <Char 
      //     key = {char} 
      //     click = {()=> {this.charClickHandler(char)}}
      //   >
      //     {char}
      //   </Char>
      // )
      const CharComponent = (function(char) {
        return (
          <Char
            key = {char}
            click = {(event, char)=> {this.charClickHandler(event, char)}}
          >
            {char}
          </Char>
        )

      }).call(this, char);
      charListComponent.push(CharComponent);
    }


    
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <input onChange = {(e) => this.inputChangeHandler(e)} value={this.state.inputValue}></input>
        <p>Input Length is {this.state.inputLength}  </p>
        <Validation input = {this.state.inputLength}></Validation>
        {charListComponent}
      </div>
      
    );
  }
}

export default App;
