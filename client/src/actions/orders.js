import { onOrder } from '../services/api';


export const receivedOrder = order => ({
  type: receivedOrder.ACTION_TYPE,
  payload: order
});

receivedOrder.ACTION_TYPE = '@@RECEIVED_ORDER';


export const receivedAllOrders = () => ({
  type: receivedAllOrders.ACTION_TYPE
});

receivedAllOrders.ACTION_TYPE = '@@RECEIVED_ALL_ORDERS';

export const refreshOrders = () =>
  dispatch =>
    onOrder(
      order => dispatch(receivedOrder(order)),
      () => dispatch(receivedAllOrders())
    );
