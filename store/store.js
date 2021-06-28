import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import newsReducer from "./reducers/newsReducer";
import DSReducer from "./reducers/D&SReducer";
import DairyReducer from "./reducers/DairyReducer";
import UserReducer from "./reducers/UserReducer";

const reducers = combineReducers({
  news: newsReducer,
  DS: DSReducer,
  Dairy: DairyReducer,
  User: UserReducer,
});

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(reducers, composedEnhancer);

export default store;
