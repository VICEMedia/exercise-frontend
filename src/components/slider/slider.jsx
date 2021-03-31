import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Slide from '../slide';

import './slider.scss';

const Slider = ({ activeShowIndex, shows }) => {
  const container = useRef();

  useEffect(() => {
    /*
      This value MUST be identical to the slide width variable
      used in our Slide component's SCSS in order for things to
      line up properly.
    */
    const slideWidth = 160;

    container.current.scroll({
      top: 0,
      left: activeShowIndex * slideWidth,
      behavior: 'smooth',
    });
  }, [activeShowIndex]);

  return (
    <nav
      ref={container}
      className="slider"
    >
      <div>
        {shows.map((show, index) => (
          <Slide
            key={show.id}
            id={show.id}
            number={index + 1}
            active={activeShowIndex === index}
          />
        ))}
      </div>
    </nav>
  );
};

Slider.propTypes = {
  activeShowIndex: PropTypes.number,
  shows: PropTypes.arrayOf(PropTypes.object),
};

Slider.defaultProps = {
  activeShowIndex: 0,
  shows: [],
};

export default Slider;