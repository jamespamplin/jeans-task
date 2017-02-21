import { Map } from 'immutable';

import { receivedOrder } from '../actions/orders';

const initialState = {
  total: 0,
  summary: Map(),
  error: null
};

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
  );
};


export const orders = (state = initialState, action) => {
  switch (action.type) {
    case receivedOrder.ACTION_TYPE:
      return {
        total: state.total + 1,
        summary: reduceSummary(state.summary, action.payload),
        error: null
      };

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
