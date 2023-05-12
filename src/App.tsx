import React, { useEffect, useState } from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

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

  const onDownloadCvClick = () => {
    fetch('CV_TomPILLET.pdf').then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'CV_TomPILLET.pdf';
        alink.click();
      })
    })
  }
 
  return (
    <div className="App">
      <header className='header'>
        <nav className='navbar'>
          <h6 className="title">Tom Pillet</h6>
          <div className="links">
            <ul className='links-list'>
              <li className="link-item">
                <a id="github" className='link' target='blank' href="https://github.com/TomPillet">Github</a>
              </li>
              <li className="link-item">
                <a id="linkedin" className='link' target='blank' href="https://www.linkedin.com/in/tom-pillet/">Linkedin</a>
              </li>
            </ul>
          </div>
        </nav>

        <span className="navbar-neon" style={{'opacity': neonOpacity+'%'}}></span>
      </header>

      <div className='content'>
        <div className="presentation-wrapper">
          <div className='photo-container'>
            <img id="photoCV" src={photoCV} alt="" />
            <p id="photoHeadings">Salut, moi c'est <span>Tom</span></p>
          </div>

          <div className='presentation-container'>
            <p className="presentation-keywords">
              Développeur,<br/> créatif,<br/> ambitieux.
            </p>
          </div>

          <button id="downloadCV" className='button action' onClick={onDownloadCvClick}>Télécharger le CV <FontAwesomeIcon className='icon' icon={faDownload}/></button>
        </div>
      </div>
    </div>
  );
}

export default App;
