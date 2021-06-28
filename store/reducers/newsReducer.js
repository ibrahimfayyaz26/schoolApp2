import { ADD_NEWS, FETCH_NEWS } from "../actions/newsAction";

const initialState = {
  news: [],
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return {
        news: action.payload,
      };
    case ADD_NEWS:
      return {
        news: state.news.concat(action.payload),
      };
  }
  return state;
};

export default newsReducer;
