import React, { useState } from 'react';
import Gif from './Gif';
import SearchBar from './SearchBar';

const App = () => {
  const [searchQuery, setSearchQuery] = useState(
    localStorage.getItem('myGiphy') || 'hello'
  );

  return (
    <div style={{ border: '3px solid #350549', background: '#000' }}>
      <Gif searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SearchBar setSearchQuery={setSearchQuery} />
    </div>
  );
};

export default App;
