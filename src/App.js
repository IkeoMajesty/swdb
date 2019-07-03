import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ships from './Ships'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Ships />
        <br />
        <br />
        <a
          className="App-link"
          href="http://www.onlinewebfonts.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Death Star icon comes from Online Web Fonts
        </a>
      </header>
    </div>
  );
}

export default App;
