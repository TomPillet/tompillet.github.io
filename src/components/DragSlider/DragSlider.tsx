import React, { FC } from 'react';
import './DragSlider.scss';

interface DragSliderProps {
  id: string,
}

export const DragSlider: FC<DragSliderProps> = ({id}) => {
  let isDown = false;
  
  const onClickDrag = (e: any) => {
    const slider = document.getElementById(id)!;
    let startX = e.pageX - slider.offsetLeft;
    let scrollLeft = slider.scrollLeft;
    slider.classList.add('on-drag');
    isDown = true;
    e.preventDefault();

    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const scrollX = e.pageX - slider.offsetLeft;
      const walk = (scrollX - startX) * 3;
      slider.scrollLeft = scrollLeft - walk;
    });
    slider.addEventListener('mouseup', () => {
      removeDragStatement(slider);
    });
    slider.addEventListener('mouseleave', () => {
      removeDragStatement(slider);
    });
  }

  const removeDragStatement = (slider: any) => {
    slider.classList.remove('on-drag');
    isDown = false;
  }

  return (
    <div id={id} className='drag-slider' onMouseDown={onClickDrag}>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
    </div>
  )
};

export default DragSlider;
