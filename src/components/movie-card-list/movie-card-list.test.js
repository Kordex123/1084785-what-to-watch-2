import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import MovieCardList from "./movie-card-list";
import films from "../../mocks/films";
import configureStore from "redux-mock-store";

it(`MovieCardList correctly renders after relaunch`, () => {

  const mockStore = configureStore([]);
  let store = mockStore({
    genre: null,
    movieCards: [],
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <MovieCardList
            filmsInformation={films}
            onHoverPreviewMoviePlay={() => {}}
          />
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
