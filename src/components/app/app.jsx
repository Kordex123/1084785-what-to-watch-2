import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Main from '../main/main.jsx';
import SignIn from "../../sign-in/sign-in.jsx";
import MoviePageDetails from "../movie-page-details/movie-page-details.jsx";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main}/>
      <Route path="/login" component={SignIn} />
      <Route path="/films/:id" component={MoviePageDetails}/>
    </Switch>
  );
};

export default App;
