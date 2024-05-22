import React from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faCakeCandles } from '@fortawesome/free-solid-svg-icons';

import AppHeader from './components/AppHeader/AppHeader';
import DragSlider from './components/DragSlider/DragSlider';
import ProjectCard from './components/ProjectCard/ProjectCard';

import photoCV from './medias/photocv_profil.jpg';

import competencesUrls from './json/competences-urls.json';

const App = () => {
  let { t }= useTranslation();
  let projectsList = require("./json/projects/"+i18next.language.substring(0,2)+"/projects.json");
  let projectsResources = require("./json/projects/projects-resources.json");

  return (
    <div className="App">
      <AppHeader></AppHeader>

      <div className='content'>
        <div className="wrapper presentation-wrapper">
          <div className='wrapper-content'>
            <div className='photo-cv-container'>
              <div className='anniversary-trigger-orbit'>
                <div className="anniversary-trigger">
                  <span><FontAwesomeIcon className='icon' icon={faCakeCandles}/></span>
                </div>
              </div>
              <div className='anniversary-text'>
                <p>Mon anniversaire est le 13 novembre de chaque année. J'ai aujourd'hui 22 ans.</p>
              </div>
              <img id="photoCV" src={photoCV} alt="Tom PILLET"/>
            </div>

            <div className='presentation-container'>
              <h1 className='presentation-title'>Tom PILLET</h1>
              <p className="presentation-text">{t("presentation_text")}</p>
            </div>

            {/* <a id="downloadCV" className='button action' href={"CV_TomPILLET-"+i18next.language+".pdf"} download>
              {t("download.my_cv")} <FontAwesomeIcon className='icon' icon={faDownload}/>
            </a> */}
          </div>
        </div>

        {/* <div className="wrapper techno-wrapper">
          <div className="wrapper-header">
            <h3>{t("tech_skills")}</h3>
          </div>
          <div className="competences-wrapper">
            <DragSlider id="competences-slider" data={competencesUrls}></DragSlider>
          </div>
          <div className="wrapper-footer"></div>
        </div>

        <div className="wrapper projects-wrapper">
          <h3 className='projects-title'>{ t('my_projects') }</h3>
          <div className="projects-container">
            {
              projectsList.map((project: any) => {
                const resources = projectsResources.find((resource: any) => resource.project_id === project.id);

                return (
                  <ProjectCard key={project.id} projectId={project.id}
                    projectBackgroundImage={resources.background}
                    projectDescription={project.description}
                    projectTitle={project.title}
                    projectTitleCustomColor={(resources.title_custom_color)? resources.title_custom_color : null}
                    projectLinks={resources.links}
                  />
                )
              })
            }
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
