import React from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import AppHeader from './components/AppHeader/AppHeader';
import DragSlider from './components/DragSlider/DragSlider';

import photoCV from './medias/photocv_profil.jpg';

import competencesUrls from './competences-urls.json';


const App = () => {
  let { t }= useTranslation();

  return (
    <div className="App">
      <AppHeader></AppHeader>

      <div className='content'>
        <div className="wrapper presentation-wrapper">
          <div className='photo-container'>
            <img id="photoCV" src={photoCV} alt="" />
            <p id="photoHeadings">{t("hi_im")} <span>Tom</span></p>
          </div>

          <div className='presentation-container'>
            <p className="presentation-keywords">
              {t("presentation")}
            </p>
          </div>

          <a id="downloadCV" className='button action' href={"CV_TomPILLET-"+i18next.language+".pdf"} download>{t("download.my_cv")} <FontAwesomeIcon className='icon' icon={faDownload}/></a>
        </div>

        <div className="wrapper">
          <div className="wrapper-header">
            <h3>{t("tech_skills")}</h3>
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
