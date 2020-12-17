const INITIAL_STATE = {
  CURRENT_USER: {},
};

export const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return { ...state };

    default:
      return state;
  }
};
