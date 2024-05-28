import React, { FC } from 'react';
import './AppHeader.scss';
import i18next, { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

import iconEN from '../../medias/flags/en-icon.svg';
import iconFR from '../../medias/flags/fr-icon.svg';

interface AppHeaderProps {}

const AppHeader: FC<AppHeaderProps> = () => {
  let { t }= useTranslation();

  return (
    <header className='header'>
      <nav className='navbar'>
        <div className="languages-dropdown">
          <div className="languages-dropdown-trigger">
              {i18next.language === 'fr' && <img className="language-flag" src={iconFR} alt="French flag" />}
              {i18next.language === 'en' && <img className="language-flag" src={iconEN} alt="English flag" />}
          </div>

          <div className="languages-list">
            <button className={`language-button ${(i18next.language === 'en') ? "current-language" : ""}`}
                    onClick={() => changeLanguage('en')}> 
              <img className="language-flag" src={iconEN} alt="English flag" />
              <span className={(i18next.language === "en") ? "underline" : ""}>EN</span> 
            </button>

            <button className={`language-button ${(i18next.language === 'fr') ? "current-language" : ""}`}
                    onClick={() => changeLanguage('fr')}> 
              <img className="language-flag" src={iconFR} alt="French flag" />
              <span className={(i18next.language === "fr") ? "underline" : ""}>FR</span> 
            </button>
          </div>
        </div>  
        
        <div className="quick-nav">
          <ul className="quick-nav-list">
            <li className="quick-nav-item">
              <a href="#" className="link">{t("sections.about_me.title")}</a>
            </li>
            <li className="quick-nav-item">
              <a href="#" className="link">{t("sections.technos")}</a>
            </li>
            <li className="quick-nav-item">
              <a href="#" className="link">{t("sections.projects")}</a>
            </li>
            <li className="quick-nav-item">
              <a href="#" className="link">{t("sections.career")}</a>
            </li>
            <li className="quick-nav-item">
              <a href="#" className="link">{t("sections.contact")}</a>
            </li>
          </ul>
        </div>

        <div className="links">
          <ul className='links-list'>
            <li className="link-item">
              <a id="youtube" className='link' target='blank' href="https://www.youtube.com/channel/UC94k5Szf0xElT1bkgh_1oiw"><FontAwesomeIcon className='icon' icon={faYoutube}></FontAwesomeIcon></a>
            </li>
            <li className="link-item">
              <a id="github" className='link' target='blank' href="https://github.com/TomPillet"><FontAwesomeIcon className='icon' icon={faGithub}></FontAwesomeIcon></a>
            </li>
            <li className="link-item">
              <a id="linkedin" className='link' target='blank' href="https://www.linkedin.com/in/tom-pillet/"><FontAwesomeIcon className='icon' icon={faLinkedinIn}></FontAwesomeIcon></a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default AppHeader;
