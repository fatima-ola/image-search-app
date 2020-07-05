import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import SearchField from './components/SearchField/SearchField.js';

function App() {
  const [setTerm] = useState('');

  let onKeyPress = (e) => {
    if (e.keyCode === 13 || e.charCode === 13) setTerm(e.target.value);
  };

  return (
    <div>
      <Header />
      <SearchField onPress={onKeyPress} />
    </div>
  );
}

export default App;
