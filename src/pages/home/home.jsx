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
    const index = Math.max(shows.findIndex((show) => show.id === activeShowId), 0);
    setActiveShowIndex(index);
  }, [search, shows]);

  const activeShow = typeof activeShowIndex !== 'undefined' ? shows[activeShowIndex] : null;

  return (
    <div className="home">
      <Slider
        activeShowIndex={activeShowIndex}
        shows={shows}
      />

      <Show show={activeShow} />
    </div>
  );
};

export default Home;
