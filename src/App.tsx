import React, { useEffect, useState } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';

import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faCakeCandles, faLocationDot } from '@fortawesome/free-solid-svg-icons';

import AppHeader from './components/AppHeader/AppHeader';
import DragSlider from './components/DragSlider/DragSlider';
import ProjectCard from './components/ProjectCard/ProjectCard';

import photoCV from './medias/photocv_profil.jpg';

import competencesUrls from './json/competences-urls.json';
import RedirectionModal from './components/RedirectionModal/RedirectionModal';

const App = () => {
  let { t }= useTranslation();
  let projectsList = require("./json/projects/"+i18next.language.substring(0,2)+"/projects.json");
  let projectsResources = require("./json/projects/projects-resources.json");

  const year = new Date().getFullYear();
  const birthday = new Date(year, 10, 13).getTime();
  const today = Date.now();
  let remainingTime = (birthday - today);

  // const [birthdayMonthsLeft, setBirthdayMonthsLeft] = useState(0);

  let [birthdayDaysLeft, setBirthdayDaysLeft] = useState(Math.floor(remainingTime/1000/60/60/24));
  remainingTime = remainingTime-(birthdayDaysLeft*86400*1000);
  let [birthdayHoursLeft, setBirthdayHoursLeft] = useState(Math.floor(remainingTime/1000/60/60));
  remainingTime = remainingTime-(birthdayHoursLeft*3600*1000);
  let [birthdayMinutesLeft, setBirthdayMinutesLeft] = useState(Math.floor(remainingTime/1000/60));
  remainingTime = remainingTime-(birthdayMinutesLeft*60*1000);
  let [birthdaySecondsLeft, setBirthdaySecondsLeft] = useState(Math.floor(remainingTime/1000));

  useEffect(() => {
    let interval = setInterval(() => {
      if (birthdaySecondsLeft > 0) {
        setBirthdaySecondsLeft(birthdaySecondsLeft - 1);
      } else if (birthdayMinutesLeft > 0) {
        setBirthdayMinutesLeft(birthdayMinutesLeft - 1);
        setBirthdaySecondsLeft(59);
      } else if (birthdayHoursLeft > 0) {
        setBirthdayHoursLeft(birthdayHoursLeft - 1);
        setBirthdayMinutesLeft(59);
        setBirthdaySecondsLeft(59);
      } else if (birthdayDaysLeft > 0) {
        setBirthdayDaysLeft(birthdayDaysLeft - 1);
        setBirthdayHoursLeft(23);
        setBirthdayMinutesLeft(59);
        setBirthdaySecondsLeft(59);
      } 
      // else if (birthdayMonthsLeft > 0) {
      //   setBirthdayMonthsLeft((birthdayMonthsLeft) => birthdayMonthsLeft--);
      //   setBirthdayDaysLeft(30);
      //   setBirthdayHoursLeft(23);
      //   setBirthdayMinutesLeft(59);
      //   setBirthdaySecondsLeft(59);
      // }
    }, 1000);

    return () => clearInterval(interval);
  }, [birthdayDaysLeft, birthdayHoursLeft, birthdayMinutesLeft, birthdaySecondsLeft]);


  let url_CV = "";
  if (i18next.language === "fr") {
    url_CV = "https://drive.google.com/uc?export=download&id=1JVp8-ftSB2QubavyhFhACymbDsMt5emU";
  } else if (i18next.language === "en") {
    url_CV = "https://drive.google.com/uc?export=download&id=17ktcre2SjByuJm9i66KWkZ2Muu1KiKBF";
  }

  return (
    <div className="App">
      <AppHeader></AppHeader>
      <RedirectionModal></RedirectionModal>

      <div className='content'>
        <div className="wrapper presentation-wrapper">
          <div className='wrapper-content'>
            <div className='photo-cv-container'>
              <div className="birthday-trigger">
                <span><FontAwesomeIcon className='icon' icon={faCakeCandles}/></span>
              </div>
              <div className='birthday-text'>
                <p>{t("next_birthday_in")} <b>{birthdayDaysLeft}</b> {t("single_words.days")}, <b>{birthdayHoursLeft}</b> {t("single_words.hours")}, <b>{birthdayMinutesLeft}</b> {t("single_words.minutes")} {t("single_words.and")} <b>{birthdaySecondsLeft}</b> {t("single_words.seconds")}.</p>
              </div>
              <img id="photoCV" src={photoCV} alt="Tom PILLET"/>
            </div>

            <div className='presentation-container'>
              <h1 className='presentation-title'>Tom PILLET</h1>
              <p className="presentation-text highlight">{t("presentation_text")}</p>
              <p className="presentation-situation">{t("presentation_situation")}</p>
              <span className="presentation-location"><FontAwesomeIcon className='icon' icon={faLocationDot}></FontAwesomeIcon> Besançon, France</span>
            </div>
          </div>
        </div>

        <div className="wrapper about-me-wrapper">
          <div className="wrapper-header very-large-background">
            <h3>{t("sections.about_me.title")}</h3>
          </div>
          <div className="wrapper-content">
            <p className="about-me-content" id="aboutMeOne">{parse(t("sections.about_me.texts.text_one"))}</p>
            <p className="about-me-content" id="aboutMeTwo">{parse(t("sections.about_me.texts.text_two"))}</p>
            <p className="about-me-content" id="aboutMeThree">{parse(t("sections.about_me.texts.text_three"))}</p>
            <p className="about-me-content" id="aboutMeFour">{parse(t("sections.about_me.texts.text_four"))}</p>
          </div>
            <a id="downloadCV" className='button action' target="_blank" rel="noreferrer" href={url_CV}>
              {t("download.my_cv")} <FontAwesomeIcon className='icon' icon={faDownload}/>
            </a>
        </div>

        {/* <div className="wrapper techno-wrapper">
          <div className="wrapper-header">
            <h3>{t("tech_skills")}</h3>
          </div>
          <div className="competences-wrapper">
            <DragSlider id="competences-slider" data={competencesUrls}></DragSlider>
          </div>
          <div className="wrapper-footer"></div>
        </div> */}

        <div className="wrapper projects-wrapper very-large-background">
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
        </div>
      </div>
    </div>
  );
}

export default App;
//