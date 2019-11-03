import React from 'react';
import renderer from 'react-test-renderer';
import Main from "./main";

it(`Main correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Main
      filmTitles={[`Ivan has an elephant`, `Nina has a giraffe`]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

