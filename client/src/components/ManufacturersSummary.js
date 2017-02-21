import React, { PropTypes } from 'react';
import { Map } from 'immutable';

export const ManufacturersSummary = ({ manufacturers }) => {
  const all = manufacturers.flatMap(
    (manufByGender, gender) =>
      manufByGender.map((count, size) => [gender, size, count])
  );

  const renderRow = ([gender, size, count]) => (
    <tr>
      <td>{gender}</td><td>{size}</td><td>{count}</td>
    </tr>
  );

  return (
    <table>
      <tbody>
        {all.map(renderRow)}
      </tbody>
    </table>
  );
};

ManufacturersSummary.propTypes = {
  manufacturers: PropTypes.objectOf(Map).isRequired
};
