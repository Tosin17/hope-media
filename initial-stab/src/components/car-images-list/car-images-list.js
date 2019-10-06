import React from 'react';
import './car-images-list.scss';
import CarImage from '../car-image/car-image';

const CarImagesList = props => {
  const imageList = props.carImages.map(image => (
    <CarImage key={image.id} image={image} />
  ));

  return <div className="car-images-list">{imageList}</div>;
};

export default CarImagesList;
