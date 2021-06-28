import { USER } from "../actions/UserAction";

const initialState = {
  User: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER:
      if (!action.payload) {
        return {
          User: [],
        };
      }
      return {
        User: [action.payload],
      };
  }
  return state;
};

export default UserReducer;
