import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from "./video-player";
import films from "../../mocks/films";

it(`VideoPlayer correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<VideoPlayer
      film={films[3]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
