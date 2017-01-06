import React from 'react';

const SelectedVideo = ({
  image,
  episodes,
  headline,
}) => (
  <div className="selectedVideo">
    <img src={image} />
    <h3>{episodes} Episodes</h3>
    <h1>{headline}</h1>
  </div>
);

export default SelectedVideo;
