import React from 'react';
import { ImagesService } from './services/car-images-service';
import Search from './search-bar/search-bar';
import CarImagesList from './car-images-list/car-images-list';

class App extends React.Component {
  constructor() {
    super();
    this.state = { images: [] };
  }

  onSearchSubmit = term => {
    ImagesService.getImages(term).subscribe(images =>
      this.setState({ images })
    );
  };

  render() {
    return (
      <div>
        <h1>App</h1>
        <Search onSubmit={this.onSearchSubmit} />
        <CarImagesList carImages={this.state.images} />
      </div>
    );
  }
}

export default App;
