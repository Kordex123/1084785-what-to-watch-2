import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import GenresList from "./genres-list.jsx";
import {Provider} from 'react-redux';
import Namespace from "../../reducer/namespace";
import films from "../../mocks/films";

it(`GenreList correctly renders after relaunch`, () => {
  const mockStore = configureStore([]);
  let store = mockStore({
    [Namespace.MOVIE]: {
      movieCards: films,
    }
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <GenresList />
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
