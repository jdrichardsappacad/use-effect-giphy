import React, { useState, useEffect } from 'react';
import Gif from './Gif';
import SearchBar from './SearchBar';

const App = () => {
  const [searchQuery, setSearchQuery] = useState(
    localStorage.getItem('myGiphy') || 'snowboard'
  );

  //store the search in localStorage

  useEffect(() => {
    localStorage.setItem('myGiphy', searchQuery);
  }, [searchQuery]);

  return (
    <main className='card'>
      <h1>Giphy</h1>
      <Gif searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className='knobs'>
        <span className='circle' />
        <span className='circle' />
      </div>
      <SearchBar setSearchQuery={setSearchQuery} />
    </main>
  );
};

export default App;
