import { FETCH_DS, ADD_DS } from "../actions/D&SAction";

const initialState = {
  DS: [],
};

const DSReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DS:
      return {
        DS: action.payload,
      };
    case ADD_DS:
      return {
        DS: state.DS.concat(action.payload),
      };
  }
  return state;
};

export default DSReducer;
