import React, { Component } from 'react';
import ImageItem from './ImageItem';

class Images extends Component {
  state = {
    users: [
      {
        id: '112126428',
        name: 'Distracted Boyfriend',
        url: 'https://i.imgflip.com/1ur9b0.jpg',
        width: 400,
        height: 500,
      },
      {
        id: '87743020',
        name: 'Two Buttons',
        url: 'https://i.imgflip.com/1g8my4.jpg',
        width: 400,
        height: 500,
      },
      {
        id: '129242436',
        name: 'Change My Mind',
        url: 'https://i.imgflip.com/24y43o.jpg',
        width: 400,
        height: 500,
      },
    ],
  };
  render() {
    return (
      <div style={imageStyle}>
        {this.state.users.map((user) => (
          <ImageItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const imageStyle = {
  margin: '1rem 0.5rem 0.5rem 4rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '3rem',
};
export default Images;
