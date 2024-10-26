import { createStoreHook } from "react-redux";

// Initial state
const initialState = {
  count: 0,
};

// Reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// Create store
return const store = createStoreHook(reducer);

export default store;