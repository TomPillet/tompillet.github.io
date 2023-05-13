import React, { FC } from 'react';
import './DragSlider.scss';

interface DragSliderProps {
  id: string,
  data: Array<any>
}

export const DragSlider: FC<DragSliderProps> = ({id, data}) => {
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
      {
        data.map(item => {
          return (
            <div key={item.id} className="item" style={{backgroundImage: "url("+require('../../'+item.url)+")"}}></div>
          )
        })
      }
    </div>
  )
};

export default DragSlider;
