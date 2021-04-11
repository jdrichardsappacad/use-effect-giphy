import React, { useState } from 'react';
import Gif from './Gif';
import SearchBar from './SearchBar';

const App = () => {
  const [searchQuery, setSearchQuery] = useState(
    localStorage.getItem('myGiphy') || 'hello'
  );

  return (
    <>
      <Gif searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SearchBar setSearchQuery={setSearchQuery} />
    </>
  );
};

export default App;
