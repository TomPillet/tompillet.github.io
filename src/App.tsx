import React, { useEffect, useState } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faCakeCandles, faLocationDot } from '@fortawesome/free-solid-svg-icons';

import AppHeader from './components/AppHeader/AppHeader';
import DragSlider from './components/DragSlider/DragSlider';
import ProjectCard from './components/ProjectCard/ProjectCard';

import photoCV from './medias/photocv_profil.jpg';

import competencesUrls from './json/competences-urls.json';

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
      console.log('ok');
      if (birthdaySecondsLeft > 0) {
        setBirthdaySecondsLeft(birthdaySecondsLeft - 1);
        console.log(birthdaySecondsLeft);
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


  return (
    <div className="App">
      <AppHeader></AppHeader>

      <div className='content'>
        <div className="wrapper presentation-wrapper">
          <div className='wrapper-content'>
            <div className='photo-cv-container'>
              <div className="birthday-trigger">
                <span><FontAwesomeIcon className='icon' icon={faCakeCandles}/></span>
              </div>
              <div className='birthday-text'>
                <p>{t("next_birthday_in")} <b>{birthdayDaysLeft}</b> {t("words.days")}, <b>{birthdayHoursLeft}</b> {t("words.hours")}, <b>{birthdayMinutesLeft}</b> {t("words.minutes")} {t("words.and")} <b>{birthdaySecondsLeft}</b> {t("words.seconds")}.</p>
              </div>
              <img id="photoCV" src={photoCV} alt="Tom PILLET"/>
            </div>

            <div className='presentation-container'>
              <h1 className='presentation-title'>Tom PILLET</h1>
              <p className="presentation-text underline">{t("presentation_text")}</p>
              <p className="presentation-situation">{t("presentation_situation")}</p>
              <span className="presentation-location"><FontAwesomeIcon className='icon' icon={faLocationDot}></FontAwesomeIcon> Besançon, France</span>
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
