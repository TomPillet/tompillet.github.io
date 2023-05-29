import React, { FC } from 'react';
import Color from 'color-thief-react';
import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import './ProjectCard.scss';

interface ProjectCardProps {
  projectId: any,
  projectBackgroundImage: string,
  projectDescription: string,
  projectLinks: any
  projectTitle: string,
}

const ProjectCard: FC<ProjectCardProps> = ({projectId, projectBackgroundImage, projectDescription, projectLinks, projectTitle}) => {
  let { t }= useTranslation();

  return (
    <Color src={require('../../'+projectBackgroundImage)} format='hex'>
      {({ data, loading, error }) => (

        <div id={projectId} className="card-inner">
          <div className="card-content" style={{boxShadow: '8px 8px 0px '+data}}>

            <div className="card-header">
              <img className='card-background' src={require('../../'+projectBackgroundImage)} alt={projectTitle} style={{borderColor: data}} />
              <h5 className="card-title" style={{textShadow: `2px 2px 0px `+data}}>
                <span className='dynamic-underline'>{projectTitle}</span>
              </h5>
            </div>

            <div className="card-description">
              {projectDescription}
            </div>

            <div className="card-links">
              <a className={`button action ${(projectLinks.demo.length === 0) ? 'no-display' : ''}`}
                href={projectLinks.demo} target='blank'>
                <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
              </a>
              <a  className={`button action ${(projectLinks.repo.length === 0) ? 'no-display' : ''}`}
                href={projectLinks.repo} target='blank'>
                { t('see_repo') } <FontAwesomeIcon icon={faGithub as IconProp}></FontAwesomeIcon>
              </a>
            </div>
          </div>
        </div>
      )}
    </Color>
  )
};

export default ProjectCard;