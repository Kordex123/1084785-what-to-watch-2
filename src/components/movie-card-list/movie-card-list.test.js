import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardList from "./movie-card-list";
import films from "../../mocks/films";

it(`MovieCardList correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<MovieCardList
      filmsInformation={films}
      onHoverPreviewMoviePlay={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
