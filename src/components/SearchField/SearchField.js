import React from 'react';
import './SearchField.css';

const SearchField = () => {
  return (
    <div>
      <div className='search-block'>
        <input type='search' placeholder='Beautiful photo?' />
        <div className='icon'></div>
      </div>
    </div>
  );
};

export default SearchField;
