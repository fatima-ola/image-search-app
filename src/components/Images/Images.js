import React from 'react';

function Images({ description, likes, user, url }) {
  return (
    <div>
      <img src={url} alt='' title='' style={imgstyle} />
      <dl style={captionstyle}>
        <dt>Image</dt>
        <dd>Photo by {user}</dd>
        <dt>Description</dt>
        <dd>{description}</dd>
        <dt>Likes</dt>
        <dd>
          {likes} <i className='fas fa-heart'></i>{' '}
        </dd>
      </dl>
    </div>
  );
}

const imgstyle = {
  margin: '1rem 5rem 1rem 5rem',
  borderRadius: '4px',
  height: '350px',
  width: '350px',
};

const captionstyle = {
  margin: '1rem 5rem 1rem 5rem',
  borderRadius: '4px',
  textAlign: 'center',
};
export default Images;
