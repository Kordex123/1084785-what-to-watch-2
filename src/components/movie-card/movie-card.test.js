import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from "./movie-card.jsx";
import films from "../../mocks/films";
import {BrowserRouter} from "react-router-dom";

it(`MovieCard correctly renders after relaunch`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <MovieCard
            film={films[3]}
            onHover={() => {}}
          />
        </BrowserRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
