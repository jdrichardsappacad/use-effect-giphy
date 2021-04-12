import React, { useState, useEffect } from 'react';

const SearchBar = props => {
  const [inputValue, setInputValue] = useState('');
  const [background, setBackground] = useState('#67a05c');
  const updateInputVal = e => {
    setInputValue(e.target.value);
  };

  const searchForGif = e => {
    e.preventDefault();
    props.setSearchQuery(inputValue);
    setInputValue('');
  };

  useEffect(() => {
    window.addEventListener('mousemove', logKey);

    function logKey(e) {
      console.log('y', e.clientY, 'x', e.clientX);
      if (
        e.clientX > 350 &&
        e.clientX < 675 &&
        e.clientY > 20 &&
        e.clientY < 550
      ) {
        setBackground('#f4f488');
      } else {
        setBackground('#67a05c');
      }
    }

    return () => {
      window.removeEventListener('mousemove', logKey);
    };
  });

  return (
    <div class='searchBar'>
      <form onSubmit={searchForGif}>
        <input
          style={{ background, color: 'black' }}
          type='text'
          value={inputValue}
          onChange={updateInputVal}
          placeholder='Search for a GIF!'
        />
      </form>
    </div>
  );
};

export default SearchBar;
