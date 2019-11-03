import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from "./movie-card";

it(`MovieCard correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<MovieCard
      filmTitles={[`Lisa has a hedgehog`, `Pavel has a hamster`]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
