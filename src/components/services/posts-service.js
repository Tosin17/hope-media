import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

class PostsService {
  constructor() {
    this.getPostsUrl = 'https://jsonplaceholder.typicode.com/posts';
    this.getUserUrl = 'https://jsonplaceholder.typicode.com/users/';
  }

  getPosts() {
    return ajax
      .get(this.getPostsUrl)
      .pipe(map(({ response: posts }) => posts.slice(0, 15)));
  }

  getUser(id) {
    return ajax
      .get(this.getUserUrl + id)
      .pipe(map(({ response: user }) => user));
  }
}

export default new PostsService();
