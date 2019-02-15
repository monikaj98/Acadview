import React, { Component } from 'react';
import './App.css';
import Display from './Display';

class App extends Component {
  render() {
    return (
      <div className="main">
        <h1>Hi,I am React App!</h1>
        <br/>
        <div className="cards">
       <Display Name='Ragnar' Age='23' Birthmonth='June' BirthYear='1992'/>
        <input type="text"></input>
        </div>
        <br/>
        <div className="cards">
        <Display Name='Lagartha' Age='22' Birthmonth='May' BirthYear='1991'/>
        <input type="text"></input>
        </div>
        <br/>
        <div className="cards">
        <Display Name='Bjorn' Age='26' Birthmonth='September' BirthYear='1996'/>
        <input type="text"></input>
        </div>
        <br/>
        <div className="cards">
        <Display Name='Porunn' Age='22' Birthmonth='October' BirthYear='1994'/>
        <input type="text"></input>
        </div>
      </div>
    );
  }
}

export default App;
