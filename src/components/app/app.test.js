import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import App from './app.jsx';
import {Provider} from "react-redux";
import Namespace from "../../reducer/namespace";
import films from "../../mocks/films";


it(`App correctly renders after relaunch`, () => {
  const mockStore = configureStore([]);
  let store = mockStore({
    [Namespace.MOVIE]: {
      movieCards: films,
    },
    [Namespace.GENRE]: {
      genre: films[0].genre,
    }
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <App/>
        </Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


