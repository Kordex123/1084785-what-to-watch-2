import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/app/app.jsx';
import films from "./mocks/films";
import {createStore} from "redux";
import {reducer} from "./reducer/reducer";
import {ActionCreator} from "./reducer/reducer";

const init = (filmsInformation) => {
  // const filmTitles = [
  //   `Fantastic Beasts: The Crimes of Grindelwald`,
  //   `Bohemian Rhapsody`,
  //   `Macbeth`,
  //   `Aviator`,
  //   `We need to talk about Kevin`,
  //   `What We Do in the Shadows`,
  //   `Revenant`,
  //   `Johnny English`,
  //   `Shutter Island`,
  //   `Pulp Fiction`,
  //   `No Country for Old Men`,
  //   `Snatch`,
  //   `Moonrise Kingdom`,
  //   `Seven Years in Tibet`,
  //   `Midnight Special`,
  //   `War of the Worlds`,
  //   `Dardjeeling Limited`,
  //   `Orlando`,
  //   `Mindhunter`,
  //   `Midnight Special`,
  // ];
  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  );

  store.dispatch(ActionCreator.loadMovies(filmsInformation));
  ReactDOM.render(<Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById(`root`));
};

init(films);
