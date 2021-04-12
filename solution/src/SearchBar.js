import React, { useState, useEffect } from 'react';

const SearchBar = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [background, setBackground] = useState('#67a05c');
  const [placer, setPlacer] = useState();

  const searchForGif = (e) => {
    e.preventDefault();
    props.setSearchQuery(inputValue);
    setInputValue('');
  };

  useEffect(() => {
    window.addEventListener('mousemove', logKey);

    function logKey(e) {
      console.log(e.pageY);
      if (e.pageY > 250 && e.pageY < 650) {
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
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={placer}
        />
      </form>
    </div>
  );
};

export default SearchBar;
