import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Main from "./main.jsx";
import {Provider} from 'react-redux';

it(`Main correctly renders after relaunch`, () => {
  const mockStore = configureStore([]);
  let store = mockStore({
    genre: null,
    movieCards: [],
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <Main />
        </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
