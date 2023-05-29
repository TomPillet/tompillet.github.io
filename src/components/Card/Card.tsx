import React, { FC } from 'react';
import Color, { useColor } from 'color-thief-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/fontawesome-free-brands';

import './Card.scss';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface CardProps {
  cardData: any
}

const Card: FC<CardProps> = ({cardData}) => (
  <Color src={require('../../'+cardData.background)} format='hex'>
    {({ data, loading, error }) => (
      <div id={cardData.id} className="card-inner">
        <div className="card-header">
          <div className='card-background'
              style={{
                backgroundImage: `url(${require('../../'+cardData.background)})`,
                borderColor: data
              }}>
          </div>
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
    )}
  </Color>
);

export default Card;
