import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import './slide.scss';

const Slide = ({ id, number, active }) => {
  return (
    <Link
      to={`?id=${id}`}
      className={cn("slide", active && "active")}
    >
      <div className="square" />
      <div className="number">{number}</div>
    </Link>
  );
};

export default Slide;