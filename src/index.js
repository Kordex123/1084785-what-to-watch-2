import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/app/app.jsx';
import {createStore} from "redux";
import reducer from "./reducer";
import {Operation} from "./reducer/movies-reducer/movies-reducer";
import thunk from "redux-thunk";
import {compose} from "recompose";
import {applyMiddleware} from "redux";
import {configureAPI} from "./api";


const init = () => {

  const api = configureAPI((...args) => store.dispatch(...args));
  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
      )
  );

  store.dispatch(Operation.loadMovies());
  ReactDOM.render(<Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById(`root`));
};

init();
