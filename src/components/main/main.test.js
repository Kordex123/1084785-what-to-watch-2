import React from 'react';
import renderer from 'react-test-renderer';
import Main from "./main.jsx";
import films from "../../mocks/films";

it(`Main correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Main
      filmsInformation={films}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

