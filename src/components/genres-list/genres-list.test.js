import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import GenresList from "./genres-list.jsx";
import {Provider} from 'react-redux';

it(`GenreList correctly renders after relaunch`, () => {
  const mockStore = configureStore([]);
  let store = mockStore({
    genre: null,
    movieCards: [],
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <GenresList />
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
