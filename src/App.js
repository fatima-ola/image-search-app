import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import SearchField from './components/SearchField/SearchField.js';
import Images from './components/Images/Images';

function App() {
  return (
    <div>
      <Header />
      <SearchField />
      <div classsName='container'>
        <Images />
      </div>
    </div>
  );
}

export default App;
