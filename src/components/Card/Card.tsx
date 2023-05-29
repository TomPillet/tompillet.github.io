import React, { FC } from 'react';
import Color from 'color-thief-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import './Card.scss';

interface CardProps {
  cardData: any
}

const Card: FC<CardProps> = ({cardData}) => {
  return (
    <Color src={require('../../'+cardData.background)} format='hex'>
      {({ data, loading, error }) => (
        <div id={cardData.id} className="card-inner">
          <div className="card-content" style={{boxShadow: '8px 8px 0px '+data}}>
            <div className="card-header">
              <img className='card-background' src={require('../../'+cardData.background)}
                  alt={cardData.title} style={{borderColor: data}} />
              <h5 className="card-title" style={{textShadow: `2px 2px 0px `+data}}>
                <span className='dynamic-underline'>{cardData.title}</span>
              </h5>
            </div>

            <div className="card-description">
              {cardData.description}
            </div>

            <div className="card-links">
              <a className={`button action ${(cardData.links.demo.length === 0) ? 'no-display' : ''}`}
                href={cardData.links.demo} target='blank'>
                <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
              </a>
              <a  className={`button action ${(cardData.links.repo.length === 0) ? 'no-display' : ''}`}
                href={cardData.links.repo} target='blank'>
                Voir le repo <FontAwesomeIcon icon={faGithub as IconProp}></FontAwesomeIcon>
              </a>
            </div>
          </div>
        </div>
      )}
    </Color>
  )
};

export default Card;
