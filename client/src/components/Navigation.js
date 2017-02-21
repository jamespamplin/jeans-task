import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export const Navigation = ({ countries, selectedCountry }) => (
  <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
    <Link className="navbar-brand" to="/">Jeans Sales</Link>

    <div className="collapse navbar-collapse">
      <ul className="navbar-nav">
        {countries.sort().map(country => (
          <li key={country} className={country === selectedCountry ? 'nav-item active' : 'nav-item'}>
            <Link className="nav-link" to={`/${country}`}>{country}</Link>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

Navigation.defaultProps = {
  countries: [],
  selectedCountry: ''
};

Navigation.propTypes = {
  countries: PropTypes.arrayOf(React.PropTypes.string),
  selectedCountry: PropTypes.string
};
