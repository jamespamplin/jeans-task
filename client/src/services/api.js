import oboe from 'oboe';

const apiHost = 'http://localhost:9000/';


export const onOrder = (cb, done) =>
  oboe(apiHost)
    .node('{product}', (order) => {
      cb.call(null, order);
      return oboe.drop;  // to remove from memory
    })
    .done(() => {
      done.call(null);
    });
