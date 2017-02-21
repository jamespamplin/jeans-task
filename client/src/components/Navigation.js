import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export const Navigation = ({ countries }) => (
  <ul>
    <li><Link to="/">home</Link></li>
    {countries.map(country => (
      <li key={country}><Link to={`/${country}`}>{country}</Link></li>
    ))}
  </ul>
);

Navigation.defaultProps = {
  countries: []
};

Navigation.propTypes = {
  countries: PropTypes.arrayOf(React.PropTypes.string)
};
