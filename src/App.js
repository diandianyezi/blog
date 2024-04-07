import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Hello from './components/Hello/Hello';
import Welcome from './components/Welcome/Welcome';

export default class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} alt="" />
          <Hello />
          <Welcome />
      </div>
    );
  }
}
