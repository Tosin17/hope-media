export const userReducer = (user = null, action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return action.payload;
    default:
      return user;
  }
};
