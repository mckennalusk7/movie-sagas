//  Imports
import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";
import axios from "axios";
// Import saga middleware
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";

import "./index.css";
import App from "./components/App/App.js";

// sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create the rootSaga generator function
function* rootSaga() {
  //   yield takeEvery("GET_MOVIES", getMovies);
  //   yield takeEvery("EDIT_MOVIES", editMovies);
}

// GET movies from server to store to the movieReducer
function* getMovies(action) {
  try {
    const response = yield axios.get("/");
    yield put({ type: "SET_MOVIES", payload: response.data });
  } catch (err) {
    console.warn("error with GET", err);
  }
}

//  PUT movies, so that user can update movie details
function* updateMovieDetails(action) {
  try {
    yield axios.put("./api/movies/", action.payload);
    yield put({ type: "GET_MOVIES" });
  } catch (err) {
    console.log("ERROR with PUT", err);
  }
}

// Used to store movies returned from the server
const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRES":
      return action.payload;
    default:
      return state;
  }
};

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    moviesReducer,
    genres,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
