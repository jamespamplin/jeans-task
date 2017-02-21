import React, { PropTypes } from 'react';
import { Map } from 'immutable';

export const MonthlySummary = ({ months }) => {
  const renderRow = (count, month) => (
    <tr>
      <td>{month}</td><td>{count}</td>
    </tr>
  );

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Month</th><th>Total</th>
        </tr>
      </thead>
      <tbody>
        {months.map(renderRow)}
      </tbody>
    </table>
  );
};

MonthlySummary.propTypes = {
  months: PropTypes.objectOf(Map).isRequired
};
