import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PasswordInput from './components/PasswordInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">React Password Strength Meter Component</h1>
        <PasswordInput />
      </div>
    );
  }
}

export default App;
