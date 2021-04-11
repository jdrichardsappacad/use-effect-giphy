import React, { useState } from 'react';

const SearchBar = props => {
  const [inputValue, setInputValue] = useState('');

  const updateInputVal = e => {
    setInputValue(e.target.value);
  };

  const searchForGif = e => {
    e.preventDefault();
    props.setSearchQuery(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={searchForGif}>
      <input
        type='text'
        value={inputValue}
        onChange={updateInputVal}
        placeholder='Search for a GIF!'
      />
    </form>
  );
};

export default SearchBar;
