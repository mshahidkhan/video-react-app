import React from 'react';
import ShowCard from './ShowCard'
import preload from '../data.json';

const Search = () => (
  <div className="search">
    <div>
      <header>
        <h1>MSK Video</h1>
        <input type="text" placeholder="Search"/>
      </header>
    </div>
    <div>
      {preload.shows.map(show => <ShowCard key={show.imdbID} {...show} /> )}
    </div>
  </div>
);

export default Search;
