// import React from 'react';
const initialState = {
  genre: `All genres`,
  movieCards: [],
};

const ActionType = {
  SET_GENRE: `SET_GENRE`,
  LOAD_MOVIES: `LOAD_MOVIES`,
};

export const ActionCreator = {
  setGenre: (selectedGenre) => ({
    type: ActionType.SET_GENRE,
    payload: selectedGenre,
  }),

  loadMovies: (movies) => ({
    type: ActionType.LOAD_MOVIES,
    payload: movies,
  }),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE: return Object.assign({}, state, {
      genre: action.payload,
    });

    case ActionType.LOAD_MOVIES: return Object.assign({}, state, {
      movieCards: action.payload
    });
  }
  return state;
};
