import React, { PropTypes } from 'react';
import { Map } from 'immutable';

export const ManufacturersSummary = ({ manufacturers }) => {
  const all = manufacturers.flatMap(
    (manufByGender, gender) =>
      manufByGender.map((count, size) => [gender, size, count])
  );

  const renderRow = ([gender, manufacturer, count]) => (
    <tr>
      <td>{gender}</td><td>{manufacturer}</td><td>{count}</td>
    </tr>
  );

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Gender</th><th>Manufacturer</th><th>Total</th>
        </tr>
      </thead>
      <tbody>
        {all.map(renderRow)}
      </tbody>
    </table>
  );
};

ManufacturersSummary.propTypes = {
  manufacturers: PropTypes.objectOf(Map).isRequired
};
