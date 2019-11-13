import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from "./movie-card.jsx";
import films from "../../mocks/films";

it(`MovieCard correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<MovieCard
      // film={{id: films[3].id, movieTitle: films[3].movieTitle, previewMovieImage: films[3].previewMovieImage}}
      film={films[3]}
      onHoverPreviewMoviePlay={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
