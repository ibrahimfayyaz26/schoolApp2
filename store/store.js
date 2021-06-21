import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

//Reducers
import { newsReducer } from "./reducers/newsReducer";

const reducers = combineReducers({
  news: newsReducer,
});

const middleware = applyMiddleware(thunk);

export default createStore(reducers, middleware);
