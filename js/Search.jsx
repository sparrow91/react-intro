// @flow

import React, { Component } from 'react';
import ShowCard from './ShowCard.jsx';
import data from '../data.json';

class Search extends Component {
  state = { searchTerm: '' };
  handleSearch = (event: SyntheticKeyboardEvent & {target: HTMLInputElement}) => {
    this.setState({ searchTerm: event.target.value });
  };
  render() {
    return (
      <div className="search">
        <header>
          <h1>svideo</h1>
          <input onChange={this.handleSearch} value={this.state.searchTerm} type="text" placeholder="Search" />
        </header>
        <div>
          {data.shows
            .filter(
              show =>
                `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => <ShowCard key={show.imdbID} show={show} />)}
        </div>
      </div>
    );
  }
}
export default Search;
