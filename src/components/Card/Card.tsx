import React, { FC } from 'react';
import Color from 'color-thief-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/fontawesome-free-brands';

import './Card.scss';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface CardProps {
  cardData: any
}

const Card: FC<CardProps> = ({cardData}) => {
  return (
    <Color src={require('../../'+cardData.background)} format='hex'>
      {({ data, loading, error }) => (
        <div id={cardData.id} className="card-inner">
          <div className="card-content">
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

            <a className='button action' href={cardData.linkto} target='blank'>
              Voir le repo <FontAwesomeIcon icon={faGithub as IconProp}></FontAwesomeIcon>
            </a>
          </div>
        </div>
      )}
    </Color>
  )
};

export default Card;
