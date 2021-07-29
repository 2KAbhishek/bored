import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';


const Header = ({title}) => {
  return (
    <header>
      <h1 onClick = {() => history.go(0)}>{title}</h1>
    </header>
  );
};

Header.defaultProps = {title: 'Bored?'};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
