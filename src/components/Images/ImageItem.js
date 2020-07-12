import React from 'react';
import Images from './Images';

function ImageItem({ response }) {
  let photosToRender;
  if (response) {
    photosToRender = response.map((res, i) => {
      return (
        <div>
          <Images
            key={i}
            likes={response[i].likes}
            description={response[i].alt_description}
            url={response[i].urls['regular']}
            user={response[i].user['name']}
          />
        </div>
      );
    });
  }
  return <div className='row'>{photosToRender}</div>;
}

export default ImageItem;
