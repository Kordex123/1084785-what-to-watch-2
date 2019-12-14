import {combineReducers} from "redux";
import {reducer as movie} from "./movies-reducer/movies-reducer";
import {reducer as genre} from "./genres-reducer/genres-reducer";
import {reducer as user} from "./user-reducer/user-reducer";
import Namespace from "./namespace";

export default combineReducers({
  [Namespace.MOVIE]: movie,
  [Namespace.GENRE]: genre,
  [Namespace.USER]: user,
});
