import { FETCH_STREAMS } from '../../actions/types';

export const streamsReducer = (streams = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...action.payload };
    default:
      return streams;
  }
};
