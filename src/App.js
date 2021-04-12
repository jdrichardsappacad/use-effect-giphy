import React, { useState } from 'react';
import Gif from './Gif';
import SearchBar from './SearchBar';

const App = () => {
  const [searchQuery, setSearchQuery] = useState(
    localStorage.getItem('myGiphy') || 'snowboard'
  );

  return (
    <main className='card'>
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
