import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const App = (props) => {
  const {filmsInformation} = props;
  return (
    <Main
      filmsInformation = {filmsInformation}
    />
  );
};

App.propTypes = {
  filmsInformation: PropTypes.arrayOf(PropTypes.object),
};

export default App;
