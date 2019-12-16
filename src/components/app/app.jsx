import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Main from '../main/main.jsx';
import SignIn from "../../sign-in/sign-in.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Namespace from "../../reducer/namespace";
import {Operation as CommentsOperation} from "../../reducer/comments-reducer/comments-reducer";
import {ActionCreator as GenreActionCreator} from "../../reducer/genres-reducer/genres-reducer";

const App = (props) => {
  return (
    <Switch>
      <Route path="/" exact render={() => {
        props.setGenre(`All genres`);
        return <Main />;
      }}/>
      <Route path="/login" component={SignIn} />
      <Route path="/films/:id" exact render={({match}) => {
        props.loadComments(match.params.id);

        const film = props.filmsInformation.find((movieCard) =>
          movieCard.id === parseInt(match.params.id, 10));
        props.setGenre(film.genre);

        return <MoviePage match={match} />;
      }}/>
    </Switch>
  );
};

App.propTypes = {
  loadComments: PropTypes.func,
  setGenre: PropTypes.func,
  filmsInformation: PropTypes.array
};

const mapStateToProps = (state) => ({
  filmsInformation: state[Namespace.MOVIE].movieCards
});

const mapDispatchToProps = (dispatch) => ({
  loadComments: (id) => dispatch(CommentsOperation.loadComments(id)),
  setGenre: (genre) => dispatch(GenreActionCreator.setGenre(genre))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
