import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import ShowSelector from './ShowSelector';
const shows = require('./shows.json');
const firstShowId = shows[0].id;

const changeShow = (id) => browserHistory.push(`/shows/${id}`);

const App = ({ params }) => {
  const showId = +params.showId;
  return <div>
    <ShowSelector shows={shows} showId={showId}
                  onChange={changeShow}/>
  </div>;
};

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to={'/shows/' + firstShowId} />
      <Route path="/shows" component={ShowSelector} >
        <IndexRedirect to={'/shows/' + firstShowId} />
      </Route>
      <Route path="/shows/:showId" component={ShowSelector} />
    </Route>
  </Router>
);

