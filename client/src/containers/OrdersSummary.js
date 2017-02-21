import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';

import { refreshOrders as refreshOrdersAction } from '../actions/orders';

import { Navigation } from '../components/Navigation';
import { OrderSizesSummary } from '../components/OrderSizesSummary';
import { ManufacturersSummary } from '../components/ManufacturersSummary';
import { MonthlySummary } from '../components/MonthlySummary';


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
        <div className="container">
          <div className="row">
            <h2>Order Summary for {selectedCountry}</h2>
          </div>

          <div className="row">
            <div className="col">
              <h3>Sizes by Gender</h3>
              <OrderSizesSummary sizes={summary.getIn([selectedCountry, 'sizes'], Map())} />
            </div>
            <div className="col">
              <div className="row">
                <h3>Monthly summary</h3>
                <MonthlySummary months={summary.getIn([selectedCountry, 'months'])} />
              </div>
              <div className="row">
                <h3>Manufacturers</h3>
                <ManufacturersSummary manufacturers={summary.getIn([selectedCountry, 'manufacturers'], Map())} />
              </div>
            </div>
          </div>
        </div>
      );
    };

    return (
      <div>
        <Navigation countries={countries} selectedCountry={selectedCountry} />
        <p className="test-muted">Loaded: {total} orders</p>

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
