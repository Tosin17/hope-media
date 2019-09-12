import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

class CarImagesService {
  constructor() {
    this.BASEURL =
      'https://pixabay.com/api/?key=11982063-c4c8956f517b260a51f7d4e7b&q=';
  }

  getImages(image = 'cars') {
    const URL = `${this.BASEURL}${image}&image_type=photo`;
    return ajax(URL).pipe(
      map(({ response }) =>
        response.hits.map(({ id, largeImageURL, tags }) => ({
          id,
          largeImageURL,
          tags
        }))
      )
    );
  }
}

// Instantiates only 1ce `ImagesService` is a singleton and it's imported as such
export const ImagesService = new CarImagesService();
