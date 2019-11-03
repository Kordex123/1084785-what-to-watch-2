import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<App
      filmTitles={[`Ivan has a cat`, `Nina has a dog`]}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
