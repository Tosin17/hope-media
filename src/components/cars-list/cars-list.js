import React from 'react';

const CarsList = props => {
  return props.carImages.map(image => (
    <img key={image.id} src={image.largeImageURL} alt={image.tags} />
  ));
};

export default CarsList;
