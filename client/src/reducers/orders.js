import { receivedOrder } from '../actions/orders';

const initialState = {
  total: 0,
  error: null
};

export const orders = (state = initialState, action) => {
  switch (action.type) {
    case receivedOrder.ACTION_TYPE:
      return {
        total: state.total + 1,
        error: null
      };

    default:
      return state;
  }
};
