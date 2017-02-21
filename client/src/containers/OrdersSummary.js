import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';

import { refreshOrders as refreshOrdersAction } from '../actions/orders';

import { Navigation } from '../components/Navigation';
import { OrderSizesSummary } from '../components/OrderSizesSummary';
import { ManufacturersSummary } from '../components/ManufacturersSummary';


class StatelessOrdersSummary extends Component {

  static defaultProps = {
    total: 0,
    summary: Map(),
    params: {}
  }

  static propTypes = {
    total: PropTypes.number,
    refreshOrders: PropTypes.func.isRequired,
    summary: PropTypes.objectOf(Map),
    params: React.PropTypes.shape({
      country: PropTypes.string
    })
  }

  componentDidMount() {
    this.props.refreshOrders();
  }

  render() {
    const { params, summary, total } = this.props;
    const selectedCountry = summary.has(params.country) ? params.country : null;
    const countries = Array.from(summary.keys());

    const Summary = () => {
      if (!selectedCountry) { return null; }

      return (
        <div>
          <h2>Order Sizes for {selectedCountry}</h2>

          <OrderSizesSummary sizes={summary.getIn([selectedCountry, 'sizes'], Map())} />

          <h2>Manufacturers for {selectedCountry}</h2>
          <ManufacturersSummary manufacturers={summary.getIn([selectedCountry, 'manufacturers'], Map())} />
        </div>
      );
    };

    return (
      <div>
        <Navigation countries={countries} />
        <p>Loaded: {total} orders</p>

        <Summary />
      </div>
    );
  }
}


const mapStateToProps = ({ orders }) => ({
  total: orders.total,
  summary: orders.summary
});

export const OrdersSummary =
  connect(mapStateToProps, { refreshOrders: refreshOrdersAction })(StatelessOrdersSummary);
