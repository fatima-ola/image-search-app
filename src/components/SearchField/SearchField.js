import React from 'react';
import classes from './SearchField.css';

const SearchField = ({ onPress }) => {
  return (
    <div>
      <div className={classes.search_block}>
        <input
          onKeyPress={onPress}
          type='search'
          placeholder='Beautiful photo?'
        />
        <div className={classes.icon}></div>
      </div>
    </div>
  );
};

export default SearchField;
