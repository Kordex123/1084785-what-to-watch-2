import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const App = (props) => {
  const {filmTitles} = props;
  return (
    <Main filmTitles = {filmTitles} />
  );
};

App.propTypes = {
  filmTitles: PropTypes.array,
};

export default App;
