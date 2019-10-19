import { SIGN_IN, SIGN_OUT, CREATE_STREAM } from './types';
import streamService from '../services/streams-services';

export const signIn = userId => ({
  type: SIGN_IN,
  payload: userId
});

export const signOut = () => ({
  type: SIGN_OUT
});

export const createStream = streamDetails => async dispatch => {
  const response = await streamService.postStream(streamDetails);

  dispatch({ type: CREATE_STREAM, payload: response.data });
};
