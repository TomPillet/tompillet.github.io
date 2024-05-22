import React, { FC } from 'react';
import './AppHeader.scss';
import i18next, { changeLanguage } from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

import iconEN from '../../medias/flags/en-icon.svg';
import iconFR from '../../medias/flags/fr-icon.svg';

interface AppHeaderProps {}

const AppHeader: FC<AppHeaderProps> = () => (
  <header className='header'>
    <nav className='navbar'>
      <div className="languages-dropdown navbar-items">
        <div className="languages-dropdown-trigger">
          <FontAwesomeIcon className="languages-icon" icon={faGlobe}></FontAwesomeIcon>
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

      <h6 className="title navbar-items">Tom Pillet</h6>
      
      <div className="links navbar-items">
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
  </header>
);

export default AppHeader;
