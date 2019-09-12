import React from 'react';
import './car-image.scss';

class CarImage extends React.Component {
  render() {
    const { url, tags } = this.props.image;
    return (
      <div className="car-image">
        <img src={url} alt={tags} />
      </div>
    );
  }
}

export default CarImage;
