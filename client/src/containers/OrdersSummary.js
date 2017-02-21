import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { refreshOrders as refreshOrdersAction } from '../actions/orders';


const StatelessOrdersSummary = ({ total, refreshOrders }) => (
  <div>
    <button onClick={refreshOrders}>Refresh Orders</button>
    <p>Total: {total}</p>
  </div>
);

StatelessOrdersSummary.defaultProps = {
  total: 0
};

StatelessOrdersSummary.propTypes = {
  total: PropTypes.number,
  refreshOrders: PropTypes.func.isRequired
};


const mapStateToProps = state => ({
  total: state.orders.total
});

export const OrdersSummary =
  connect(mapStateToProps, { refreshOrders: refreshOrdersAction })(StatelessOrdersSummary);
