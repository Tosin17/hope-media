import { CREATE_STREAM } from '../../actions/types';

export const createStreamReducer = (streams = [], action) => {
  switch (action.type) {
    case CREATE_STREAM:
      return [...streams, action.payload];
    default:
      return streams;
  }
};
