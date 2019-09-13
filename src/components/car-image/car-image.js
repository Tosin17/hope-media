import React from 'react';
import './car-image.scss';

class CarImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { imageHeight: 0 };
    this.imageRef = React.createRef();
  }

  getImageHieight = () => {
    const imageHeight = this.imageRef.current.clientHeight;
    this.setState({ imageHeight });
    console.log(imageHeight);
  };

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.getImageHieight);
  }

  render() {
    const { url, tags } = this.props.image;
    return (
      <div className="car-image" style={{ height: this.state.imageHeight }}>
        {/* NOTE: `ref` is the template refrence */}
        <img ref={this.imageRef} src={url} alt={tags} />
      </div>
    );
  }
}

export default CarImage;
