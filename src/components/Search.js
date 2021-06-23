import React, { useState } from 'react';
import PropTypes from 'prop-types';
import searchIcon from './images/search.svg'

const Search = ({ searchArticles }) => {
  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    searchArticles(text);
  };
  return (
    <div className="search input-field">
      <form onSubmit={handleSubmit}>
      <div>
      <img className='search-icon' src={searchIcon}/>
      <label for="name">  Search articles..</label>
        <input
          label="Search articles"
          className="search-articles"
          type="text"
          name="text"
          value={text}
          onChange={handleChange}
        />
        </div>
      </form>
    </div>
  );
};

Search.propTypes = {
  searchArticles: PropTypes.func.isRequired,
};

export default Search;
