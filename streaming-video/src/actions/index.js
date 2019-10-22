import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
  EDIT_STREAM
} from './types';
import streamService from '../services/streams-services';
import history from '../history';

export const signIn = userId => ({
  type: SIGN_IN,
  payload: userId
});

export const signOut = () => ({
  type: SIGN_OUT
});

export const createStream = streamDetails => async dispatch => {
  try {
    const response = await streamService.postStream(streamDetails);
    dispatch({ type: CREATE_STREAM, payload: response.data });
    // Re-route to home page on success
    history.push('/');
  } catch (err) {}
};

export const fetchStreams = () => async dispatch => {
  const response = await streamService.fetchStreams();
  dispatch({ type: FETCH_STREAMS, payload: response });
};

export const deleteStream = id => async dispatch => {
  await streamService.deleteStreams(id);
  dispatch({ type: DELETE_STREAM, payload: id });
};

export const editStream = (id, update) => async dispatch => {
  const response = await streamService.updateStream(id, update);
  dispatch({ type: EDIT_STREAM, payload: response.data });
};
