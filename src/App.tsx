import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <nav className='navbar'>
          <h6 className="title">Tom Pillet</h6>
          <div className="links">
            <ul className='links-list'>
              <li className="link-item">
                <a id="github" href="">Github</a>
              </li>
              <li className="link-item">
                <a id="linkedin" href="">Linkedin</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
