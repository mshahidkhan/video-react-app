// @flow
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import type {match} from 'Match';
import Search from './Search';
import Details from './Details'; 
import preload from '../data.json';

const FourOFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/details/:id" 
          component={(props) => 
          <Details show={preload.shows.find(
            show => props.match.params.id === show.imdbID )} />
          } 
        />
        <Route component={FourOFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
