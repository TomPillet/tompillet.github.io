import React, { useEffect, useState } from 'react';
import './App.scss';

import photoCV from './medias/photocv_profil.jpg';

const App = () => {
  const [neonOpacity, setNeonOpacity] = useState(100);
  // let randIntervalDelay = (neonOpacity != 100) ? 80 : Math.floor(Math.random() * (1000 - 200) + 200);

  // let randTrueOrFalse = () => {
  //   return (Math.floor(Math.random() * (3 - 1) + 1) % 2) === 0;
  // }

  // useEffect(() => {
  //   const neonInterval = setInterval(() => {
  //     setNeonOpacity((randTrueOrFalse()) ? 100 : (Math.random() * neonOpacity));
  //   }, randIntervalDelay);
    
  //   return () => clearInterval(neonInterval);
  // })  

  return (
    <div className="App">
      <header className='header'>
        <nav className='navbar'>
          <h6 className="title">Tom Pillet</h6>
          <div className="links">
            <ul className='links-list'>
              <li className="link-item">
                <a id="github" target='blank' href="https://github.com/TomPillet">Github</a>
              </li>
              <li className="link-item">
                <a id="linkedin" target='blank' href="https://www.linkedin.com/in/tom-pillet/">Linkedin</a>
              </li>
            </ul>
          </div>
        </nav>

        <span className="navbar-neon" style={{'opacity': neonOpacity+'%'}}></span>
      </header>

      <div className='content'>
        <div className='photo-container'>
          <img id="photoCV" src={photoCV} alt="" />
          <p id="photoPresentation">Salut, moi c'est <span>Tom</span></p>
        </div>
      </div>
    </div>
  );
}

export default App;
