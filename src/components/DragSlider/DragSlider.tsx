import React, { FC, useState } from 'react';
import './DragSlider.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

interface DragSliderProps {
  id: string,
  data: Array<any>
}

export const DragSlider: FC<DragSliderProps> = ({id, data}) => {
  let sliderActive = false;
  let sliderSpeed = 60;

  function onClickDrag(e: any) {
    const slider = document.getElementById(id)!;
    const sliderButtonLeft = document.querySelector('.drag-slider-button#left');
    const sliderButtonRight = document.querySelector('.drag-slider-button#right');
    sliderActive = true;
    hideOrShowButtons(sliderButtonLeft, sliderButtonRight, slider);

    let startX = e.pageX - slider.offsetLeft;
    let scrollLeft = slider.scrollLeft;
    slider.classList.add('on-drag');
    e.preventDefault();

    slider.addEventListener('mousemove', (e: any) => {
      if (!sliderActive) return;
      e.preventDefault();
      const scrollX = e.pageX - slider.offsetLeft;
      const walk = (scrollX - startX) * 3;
      slider.scrollLeft = scrollLeft - walk;

    });
    slider.addEventListener('mouseup', () => {
      removeDragStatement(slider);
      hideOrShowButtons(sliderButtonLeft, sliderButtonRight, slider);
    });
    slider.addEventListener('mouseleave', () => {
      removeDragStatement(slider);
      hideOrShowButtons(sliderButtonLeft, sliderButtonRight, slider);
    });

    return;
  }

  function removeDragStatement(slider: any) {
    slider.classList.remove('on-drag');
    sliderActive = false;
    return;
  }

  function hideOrShowButtons(buttonLeft: any, buttonRight: any, slider: any) {
    if (slider.scrollLeft === 0 || sliderActive) {
      buttonLeft.classList.add('hide');
    } else {
      buttonLeft.classList.remove('hide');
    }
    if (slider.scrollLeft === slider.scrollLeftMax || sliderActive) {
      buttonRight.classList.add('hide');
    } else {
      buttonRight.classList.remove('hide');
    }
  }

  function moveTo(e: any): any {
    const direction = e.target.getAttribute('id');
    const slider = document.getElementById(id);
    if (slider === null) return;
    let i = 0;
    const goLeftInterval = setInterval(() => {
      (direction === 'left') ? slider!.scrollLeft -= sliderSpeed : slider!.scrollLeft += sliderSpeed;
      i += sliderSpeed;
      if (i >= window.innerWidth) {
        hideOrShowButtons(document.querySelector('.drag-slider-button#left'), document.querySelector('.drag-slider-button#right'), slider);
        clearInterval(goLeftInterval);
      } 
    },1);
  }

  return (
    <div className='drag-slider-container'>
      <button id="left" className='drag-slider-button hide' onClick={moveTo}>
        <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
      </button>
      <button id="right" className='drag-slider-button' onClick={moveTo}>
        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
      </button>

      <div id={id} className='drag-slider' onMouseDown={onClickDrag} title="You can horizontally drag this or use the buttons on the side">
        {
          data.map(item => {
            return (
              <div key={item.id} className='item'>
                <div 
                  className="item-image"
                  style={{backgroundImage: "url("+require('../../'+item.url)+")"}}
                ></div>
                <span className='item-title'>{item.title}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
};

export default DragSlider;
