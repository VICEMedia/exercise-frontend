import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Slide from '../slide';

import './slider.scss';

const Slider = ({ activeShowIndex, shows }) => {
  const container = useRef();
  const autoScrollBehavior = useRef();

  useEffect(() => {
    if (activeShowIndex === null) {
      return;
    }

    /*
      This value MUST match it's scss counterpart
      for the UI to align correctly.
    */
    const slideWidth = 160;

    container.current.scroll({
      top: 0,
      left: activeShowIndex * slideWidth,
      behavior: autoScrollBehavior.current,
    });

    autoScrollBehavior.current = 'smooth';
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
  activeShowIndex: null,
  shows: [],
};

export default Slider;
