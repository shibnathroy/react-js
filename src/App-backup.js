import React, { Component } from 'react';
import NameComponent from './components/NameComponent';

class App extends Component {

  componentDidMount() {
      console.log('Mounted');
  }



  greetMore(){
     console.log('Greeting more');
  }

  render() {

    var myArray = ['Smart', 'Intelligent', 'Strong'];
    var renderArray = [];

    myArray.forEach(function(word, i){
        renderArray.push(<p key={i}>You are {word}</p>)
    });

    let name = 'Srimaan';
    return (
      <div>
          <h1 className="main-heading" style={{ fontSize: '30px' }}>HI { name }</h1>
          <NameComponent></NameComponent>
          {renderArray}
          <button onClick={this.greetMore}>Greet More</button>
      </div>
    );
  }
}

export default App;
