import React from 'react';
import { ImagesService } from './services/car-images';
import Search from './search-bar/search-bar';
import CarsList from './cars-list/cars-list';

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
        <CarsList carImages={this.state.images} />
      </div>
    );
  }
}

export default App;
