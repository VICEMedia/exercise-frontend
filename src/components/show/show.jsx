import React from 'react';
import PropTypes from 'prop-types';

import './show.scss';

const Show = ({ show }) => {
  if (!show) {
    return null;
  }
  return (
    <main className="show">
      <img
        src={show.product_image_url}
        alt={show.title}
      />
      <p>
        <b>{`${show.episodes} episodes`}</b>
      </p>
      <h1>{show.title}</h1>
    </main>
  );
};

Show.propTypes = {
  show: PropTypes.shape({
    product_image_url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    episodes: PropTypes.number.isRequired,
  }),
};

Show.defaultProps = {
  show: null,
};

export default Show;
