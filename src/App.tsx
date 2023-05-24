import React from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import AppHeader from './components/AppHeader/AppHeader';
import DragSlider from './components/DragSlider/DragSlider';


import competencesUrls from './competences-urls.json';
import photoCV from './medias/photocv_profil.jpg';

const App = () => {
   return (
    <div className="App">
      <AppHeader></AppHeader>

      <div className='content'>
        <div className="wrapper presentation-wrapper">
          <div className='photo-container'>
            <img id="photoCV" src={photoCV} alt="" />
            <p id="photoHeadings">Salut, moi c'est <span>Tom</span></p>
          </div>

          <div className='presentation-container'>
            <p className="presentation-keywords">
              Développeur junior,<br/> ambitieux et motivé.
            </p>
          </div>

          <a id="downloadCV" className='button action' href="CV_TomPILLET-fr.pdf" download>Télécharger le CV <FontAwesomeIcon className='icon' icon={faDownload}/></a>
        </div>

        <div className="wrapper">
          <div className="wrapper-header">
            <h3>Compétences techniques</h3>
          </div>
          <div className="competences-wrapper">
            <DragSlider id="competences-slider" data={competencesUrls}></DragSlider>
          </div>
          <div className="wrapper-footer"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
