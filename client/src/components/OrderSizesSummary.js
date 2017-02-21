import React, { PropTypes } from 'react';
import { Map } from 'immutable';

export const OrderSizesSummary = ({ sizes }) => {
  const allSizes = sizes.flatMap(
    (sizesByGender, gender) =>
      sizesByGender.map((count, size) => [gender, size, count])
  );

  const renderRow = ([gender, size, count]) => (
    <tr>
      <td>{gender}</td><td>{size}</td><td>{count}</td>
    </tr>
  );

  return (
    <table>
      <tbody>
        {allSizes.map(renderRow)}
      </tbody>
    </table>
  );
};

OrderSizesSummary.propTypes = {
  sizes: PropTypes.objectOf(Map).isRequired
};
