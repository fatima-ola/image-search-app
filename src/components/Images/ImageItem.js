import React, { Component } from 'react';

class ImageItem extends Component {
  render() {
    const { url, width, height, name } = this.props.user;
    return (
      <div className='cover'>
        <img src={url} alt='' width={width} height={height} />

        <h6 style={{ color: 'black' }}>{name}</h6>
      </div>
    );
  }
}

export default ImageItem;
