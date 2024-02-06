import React, { useState } from 'react';

function SearchBar({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClick = () => {
    // Call the handleSearch function with the current search term
    handleSearch(searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search transactions..."
      />
      
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

export default SearchBar;

