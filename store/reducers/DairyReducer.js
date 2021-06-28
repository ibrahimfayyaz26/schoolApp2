import { FETCH_DAIRY, ADD_DAIRY } from "../actions/DairyAction";

const initialState = {
  Dairy: [],
};

const DairyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DAIRY:
      return {
        Dairy: action.payload,
      };
    case ADD_DAIRY:
      return {
        Dairy: state.Dairy.concat(action.payload),
      };
  }
  return state;
};

export default DairyReducer;
