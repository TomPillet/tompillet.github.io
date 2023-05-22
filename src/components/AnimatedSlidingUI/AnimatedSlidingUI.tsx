import React, { FC } from 'react';
import './AnimatedSlidingUI.scss';

interface AnimatedSlidingUIProps {
  show: boolean
}

const AnimatedSlidingUI: FC<AnimatedSlidingUIProps> = ({show}) => {
  return (
    <div className="arrows" style={{display: (show) ? 'block' : 'none'}}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
};

export default AnimatedSlidingUI;
