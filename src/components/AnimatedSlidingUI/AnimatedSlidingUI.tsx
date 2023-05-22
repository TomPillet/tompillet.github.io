import React, { FC } from 'react';
import './AnimatedSlidingUI.scss';

interface AnimatedSlidingUIProps {
  show: boolean
}

const AnimatedSlidingUI: FC<AnimatedSlidingUIProps> = ({show}) => {
  return (
    <div className="animation-container" style={{display: (show) ? 'block' : 'none'}}>
      <span></span>
      <p>SLIDE HERE</p>
    </div>
  )
};

export default AnimatedSlidingUI;
