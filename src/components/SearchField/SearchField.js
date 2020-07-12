import React from 'react';
import './SearchField.css';

const SearchField = ({ onPress }) => {
  return (
    <div>
      <div className='search-block'>
        <input
          onKeyPress={onPress}
          type='search'
          placeholder='Beautiful photo?'
        />
        <div className='icon'></div>
      </div>
    </div>
  );
};

export default SearchField;
