import React from 'react';
import ShowCard from './ShowCard.jsx';
import data from '../data.json';

const Search = () => (
  <div className="search">
    {data.shows.map(show => <ShowCard show={show} />)}
  </div>
);
export default Search;
