import axios from 'axios';

class StreamsService {
  _axios = axios.create();
  _URL = 'http://localhost:3001/streams';

  postStream(streamDetails) {
    return this._axios.post(this._URL, streamDetails);
  }

  fetchStream(id) {
    return this._axios.get(`${this._URL}/${id}`);
  }

  fetchStreams() {
    return this._axios.get(this._URL).then(({ data }) => {
      // NOTE: You can use lodash's mapKeys to do this
      const reducedStreams = data.reduce((acc, val) => {
        acc[val.id] = val;
        return acc;
      }, {});

      return Promise.resolve(reducedStreams);
    });
  }

  deleteStreams(id) {
    return this._axios.delete(`${this._URL}/${id}`);
  }

  updateStream(id, update) {
    return this._axios.patch(`${this._URL}/${id}`, update);
  }
}

export default new StreamsService();
