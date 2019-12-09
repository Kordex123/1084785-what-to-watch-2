import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import App from './app.jsx';
import {Provider} from "react-redux";


it(`App correctly renders after relaunch`, () => {
  const mockStore = configureStore([]);
  let store = mockStore({
    genre: null,
    movieCards: [],
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <App/>
        </Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


