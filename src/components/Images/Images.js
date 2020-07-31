import React from 'react';
import styles from './images.css';

function Images({ description, likes, user, url }) {
  return (
    <div>
      <img src={url} alt='' title='' className={styles.img} />
      <dl className={styles.caption}>
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

export default Images;
