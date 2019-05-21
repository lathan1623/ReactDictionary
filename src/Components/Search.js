import React from 'react';

const Search = (props) => (
  <form className="search" onSubmit={props.getWord}>
    <div className="search-bar-div">
      <input
        className="search-bar"
        type="text"
        name="word"
        placeholder="Enter a word..."
      />
    </div>
    <div>
      <button className="button" name="search">Search</button>
    </div>
  </form>
);

export default Search;
