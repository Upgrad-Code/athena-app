export const iState = {
  isLoading: false,
  products: [],
  error: null,
};

export const ACTIONS_TYPE = {
  FETCH_START: 'FETCH_START',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',
};

export const ProductPageReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS_TYPE.FETCH_START:
      return {
        ...state,
      };
    case ACTIONS_TYPE.FETCH_SUCCESS:
      return {
        ...state,
      };
    case ACTIONS_TYPE.FETCH_ERROR:
      return {
        ...state,
      };
    default:
      return {
        state,
      };
  }
};
