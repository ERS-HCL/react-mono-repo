import React, { Component } from 'react';
import Wrapper from '@tsukhu/components/lib/Wrapper';
import ComponentOne from '@tsukhu/components/lib/ComponentOne';
import ComponentTwo from '@tsukhu/components/lib/ComponentTwo';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Wrapper background={'mediumseagreen'}>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>

          <ComponentOne>
            Hello World, this is my first styled component!
          </ComponentOne>

          <ComponentTwo>This is my second styled component!</ComponentTwo>
        </Wrapper>
      </div>
    );
  }
}

export default App;
