import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import films from "../../mocks/films";
import configureStore from "redux-mock-store";
import Namespace from "../../reducer/namespace";
import MoviePageDetails from "./movie-page-details.jsx";

it(`MoviePageDetails correctly renders after relaunch`, () => {

  const mockStore = configureStore([]);
  let store = mockStore({
    [Namespace.MOVIE]: {
      movieCards: films,
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <MoviePageDetails filmId={10111} />
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
