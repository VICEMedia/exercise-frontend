import React from 'react';

import './show.scss';

const Show = ({ show }) => (
  <main className="show">
    <img
      src={show.product_image_url}
      alt={show.title}
    />
    <strong>{`${show.episodes} episodes`}</strong>
    <h1>{show.title}</h1>
  </main>
);

export default Show;