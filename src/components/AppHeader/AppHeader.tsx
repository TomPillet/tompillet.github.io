import React, { FC } from 'react';
import './AppHeader.scss';

interface AppHeaderProps {}

const AppHeader: FC<AppHeaderProps> = () => (
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

    <span className="navbar-neon"></span>
  </header>
);

export default AppHeader;
