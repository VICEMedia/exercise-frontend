import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import './slide.scss';

const Slide = ({ id, number, active }) => (
  <Link
    to={`?id=${id}`}
    aria-label={`Show ${number}`}
    className={cn('slide', active && 'active')}
  >
    <div className="square" />
    <div className="number">
      {number}
    </div>
  </Link>
);

Slide.propTypes = {
  id: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  active: PropTypes.bool,
};

Slide.defaultProps = {
  active: false,
};

export default Slide;
