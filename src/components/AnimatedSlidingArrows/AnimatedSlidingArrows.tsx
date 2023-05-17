import React, { FC } from 'react';
import './AnimatedSlidingArrows.scss';

interface AnimatedSlidingArrowsProps {}

const AnimatedSlidingArrows: FC<AnimatedSlidingArrowsProps> = () => {
  return (
    <div className="arrows">
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
};

export default AnimatedSlidingArrows;
