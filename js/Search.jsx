import React from 'react';
import ShowCard from './ShowCard.jsx';
import data from '../data.json';

const Search = () => (
  <div className="search">
   <div>
    {data.shows.map(show => <ShowCard key={show.imdbID} show={show} />)}
  </div>
  </div>
);
export default Search;
