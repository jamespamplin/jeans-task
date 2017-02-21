import { Map, Stack } from 'immutable';
import moment from 'moment';

import { receivedOrder, receivedAllOrders } from '../actions/orders';

const initialState = {
  total: 0,
  buffer: Stack(),
  summary: Map(),
  error: null
};

const MAX_BUFFER_SIZE = 10000;


const reduceSummary = (summary, order) => {
  const { country, quantity } = order;
  const { gender, size, manufacturer } = order.product;

  return summary.update(country, Map(), byCountry =>
    byCountry
      .update('sizes', Map(), sizes =>
        sizes.update(gender, Map(), sizeByGender =>
          sizeByGender
            .update(size, 0, curr => curr + quantity)
            .sort()
        )
      )
      .update('manufacturers', Map(), manuf =>
        manuf.update(gender, Map(), manufByGender =>
          manufByGender
            .update(manufacturer, 0, curr => curr + quantity)
            .sort()
        )
      )
      .update('months', Map(), month =>
        month.update(moment(order.date).format('MMMM'), 0, curr => curr + quantity)
      )
  );
};


const flushBuffer = (state, buffer = state.buffer) => {
  const { summary, total } = state;

  return {
    summary: buffer.reduce(reduceSummary, summary),
    total: total + buffer.size,
    buffer: buffer.clear(),
    error: null
  };
};

const updateStateWithOrder = (state, order) => {
  const { summary, total } = state;
  const buffer = state.buffer.push(order);

  if (buffer.size >= MAX_BUFFER_SIZE) {
    return flushBuffer(state, buffer);
  }

  return {
    summary,
    total,
    buffer,
    error: null
  };
};


export const orders = (state = initialState, action) => {
  switch (action.type) {
    case receivedOrder.ACTION_TYPE:
      return updateStateWithOrder(state, action.payload);

    case receivedAllOrders.ACTION_TYPE:
      return flushBuffer(state);

    default:
      return state;
  }
};


// By country:
// - top manufacturers by gender
// - top sizes
// - top selling months

/*
{
  summary: {
    uk: {
      sizes: {
        male: {
          32: 200 // count
        }
      }  // sort?
      manufacturers: {
        male: [ {manufacturer: "name", count: 0 } ],
        female: [ {manufacturer: "name", count: 0 }  ]
      },
      month: {
        1: 100,
        2: 300
      }
    }
  }
}
*/
