import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import SearchField from './components/SearchField/SearchField.js';
import ImageItem from './components/Images/ImageItem';

const apiKey =
  '581eb4a49e4ae7142198627eae4a64b445a6bd9af7bb96de5a3cf51e2b62d919';

function App() {
  const [photos, setPhotos] = useState([]);
  const [term, setTerm] = useState('');
  // let photosToRender;

  let onKeyPress = (e) => {
    if (e.keyCode === 13 || e.charCode === 13) setTerm(e.target.value);
  };

  useEffect(() => {
    fetchData(term);
  }, [term]);

  async function fetchData(term) {
    try {
      let data = await fetch(
        `https://api.unsplash.com/search/photos?client_id=${apiKey}&per_page=30&query=${term}`
      );
      const items = await data.json();
      setPhotos(items.results);
    } catch (error) {
      console.log(`Error is ${error}`);
    }
  }

  return (
    <div>
      <Header />
      <SearchField onPress={onKeyPress} />
      <div classsName='container'>
        <ImageItem response={photos} />
      </div>
    </div>
  );
}

export default App;
