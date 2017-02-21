import React, { PropTypes } from 'react';
import { Map } from 'immutable';

export const MonthlySummary = ({ months }) => {
  // const allSizes = sizes.flatMap(
  //   (sizesByGender, gender) =>
  //     sizesByGender.map((count, size) => [gender, size, count])
  // );

  const renderRow = (month, count) => (
    <tr>
      <td>{month}</td><td>{count}</td>
    </tr>
  );

  return (
    <table>
      <tbody>
        {months.map(renderRow)}
      </tbody>
    </table>
  );
};

MonthlySummary.propTypes = {
  months: PropTypes.objectOf(Map).isRequired
};
