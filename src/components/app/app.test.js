import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import films from "../../mocks/films";

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<App
      filmsInformation={films}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
