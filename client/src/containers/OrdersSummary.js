import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';

import { refreshOrders as refreshOrdersAction } from '../actions/orders';

import { OrderSizesSummary } from '../components/OrderSizesSummary';
import { ManufacturersSummary } from '../components/ManufacturersSummary';


class StatelessOrdersSummary extends Component {

  static defaultProps = {
    total: 0,
    summary: Map()
  }

  static propTypes = {
    total: PropTypes.number,
    refreshOrders: PropTypes.func.isRequired,
    summary: PropTypes.objectOf(Map)
  }

  componentDidMount() {
    this.props.refreshOrders();
  }

  render() {
    const { params, summary, total } = this.props;
    return (
      <div>
        <p>Loaded: {total} orders</p>
        <h2>Order Sizes for UK</h2>
        <OrderSizesSummary sizes={summary.getIn(['UK', 'sizes'], Map())} />

        <h2>Manufacturers for UK</h2>
        <ManufacturersSummary manufacturers={summary.getIn(['UK', 'manufacturers'], Map())} />
      </div>
    );
  }
}


const mapStateToProps = ({ orders }) => ({
  total: orders.total,
  // countries: Array.from(orders.summary.keys())
  summary: orders.summary
});

export const OrdersSummary =
  connect(mapStateToProps, { refreshOrders: refreshOrdersAction })(StatelessOrdersSummary);
