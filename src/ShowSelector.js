import React from 'react';
import './App.css';

// Restrict a number to fall between 0 and a maximum.
function clampPositive(num, max) {
  return num <= 0 ? 0 : num >= max ? max : num;
}

function ShowSelector({ shows, showId, onChange }) {
  // Look up the show by id, defaulting to first show if id isn't found.
  const show = shows.filter(aShow => +aShow.id === +showId)[0] || shows[0];
  const showIndex = shows.indexOf(show);
  const getNewShowIndex = (delta) => clampPositive(showIndex + delta, shows.length - 1);
  const nextShowIndex = getNewShowIndex(+1);
  const prevShowIndex = getNewShowIndex(-1);
  const nextShowId = shows[nextShowIndex].id;
  const prevShowId = shows[prevShowIndex].id;

  return (
    <div className="show-component">
      <img className="show-image" alt={show.title}
           src={'/static' + show.product_image_url} />
      <div className="show-episodes">{show.episodes} EPISODES</div>
      <div className="show-title">{show.title}</div>
      <div>
        { shows.map(theShow => theShow === show ? '●' : '○') }
      </div>
      <div>
        <button className="show-navigation"
                disabled={showIndex === 0}
                onClick={() => onChange(prevShowId)}>◀</button>
        <button className="show-navigation"
                disabled={showIndex === shows.length - 1}
                onClick={() => onChange(nextShowId)}>▶</button>
      </div>
    </div>
  );
}

export default ShowSelector;

