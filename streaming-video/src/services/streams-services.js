import axios from 'axios';

class StreamsService {
  _axios = axios.create();
  _URL = 'http://localhost:3001/streams';

  postStream(streamDetails) {
    return this._axios.post(this._URL, streamDetails);
  }
}

export default new StreamsService();
