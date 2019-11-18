import React from 'react';
import renderer from 'react-test-renderer';
import PageLogo from "./page-logo";

it(`PageLogo correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<PageLogo
      isLight={true}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
