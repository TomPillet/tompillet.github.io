import React from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import DragSlider from './components/DragSlider/DragSlider';

import competencesUrls from './competences-urls.json';
import photoCV from './medias/photocv_profil.jpg';

const App = () => {
  const neonOpacity = 100;

  // NEON'S ANIMATION : import useState to enable neon animation
  // const [neonOpacity, setNeonOpacity] = useState(100);
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
        <div className="wrapper presentation-wrapper">
          <div className='photo-container'>
            <img id="photoCV" src={photoCV} alt="" />
            <p id="photoHeadings">Salut, moi c'est <span>Tom</span></p>
          </div>

          <div className='presentation-container'>
            <p className="presentation-keywords">
              Développeur,<br/> créatif,<br/> ambitieux.
            </p>
          </div>

          <a id="downloadCV" className='button action' href="CV_TomPILLET.pdf" download>Télécharger le CV <FontAwesomeIcon className='icon' icon={faDownload}/></a>
        </div>

        <div className="wrapper competences-wrapper">
          <DragSlider id="competences-slider" data={competencesUrls}></DragSlider>
        </div>
      </div>
    </div>
  );
}

export default App;
