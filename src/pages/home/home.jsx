import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Show, Slider } from '../../components';

import './home.scss';

const Home = () => {
  const { search } = useLocation();

  const [activeShowIndex, setActiveShowIndex] = useState();
  const [shows, setShows] = useState();

  const fetchShows = async () => {
    const response = await fetch('http://localhost:3000/shows');
    const data = await response.json();
    setShows(data);
  };

  useEffect(() => {
    fetchShows();
  }, []);

  useEffect(() => {
    if (!shows) { return; }
    const params = new URLSearchParams(search);
    const activeShowId = params.get('id');
    setActiveShowIndex(shows.findIndex(show => show.id === activeShowId));
  }, [search, shows]);

  return (
    <div className="home">
      <Slider
        activeShowIndex={activeShowIndex}
        shows={shows}
      />

      {typeof activeShowIndex !== 'undefined' && (
        <Show show={shows[activeShowIndex]} />
      )}
    </div>
  );
};

export default Home;