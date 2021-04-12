import React, { useState, useEffect } from 'react';

const SearchBar = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [background, setBackground] = useState('#67a05c');
  const [placer, setPlacer] = useState();

  const updateInputVal = (e) => {
    setInputValue(e.target.value);
  };

  const searchForGif = (e) => {
    e.preventDefault();
    props.setSearchQuery(inputValue);
    setInputValue('');
  };

  useEffect(() => {
    window.addEventListener('mousemove', logKey);

    function logKey(e) {
      if (e.pageY > 200 && e.pageY < 650) {
        setBackground('#f4f488');
        setPlacer('Pic a new GIF already!');
      } else {
        setBackground('#67a05c');
        setPlacer('Search for a GIF!');
      }
    }

    return () => {
      window.removeEventListener('mousemove', logKey);
    };
  });

  return (
    <div className='searchBar'>
      <form onSubmit={searchForGif}>
        <input
          style={{ background, color: 'black' }}
          type='text'
          value={inputValue}
          onChange={updateInputVal}
          placeholder={placer}
        />
      </form>
    </div>
  );
};

export default SearchBar;
