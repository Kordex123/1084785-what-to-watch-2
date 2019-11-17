import React from 'react';
import PropTypes from 'prop-types';

const PageLogo = (props) => {
  return (
    <div className="logo">
      <a className={`logo__link ${props.isLight ? `logo__link--light` : ``}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
};

export default PageLogo;

PageLogo.propTypes = {
  isLight: PropTypes.bool,
};
