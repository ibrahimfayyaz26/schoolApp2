import axios from "axios";
export const FETCH_DAIRY = "FETCH_DAIRY";
export const ADD_DAIRY = "ADD_DAIRY";

export const getDairy = () => {
  return async (dispatch) => {
    const data = await axios.get("http://192.168.31.130:3000/Dairy");
    // console.log(data.data);
    dispatch({
      type: FETCH_DAIRY,
      payload: data.data,
    });
  };
};

export const postDairy = (body) => {
  return async (dispatch) => {
    const data = await axios.post("http://192.168.31.130:3000/Dairy", body);
    console.log(data.data);
    dispatch({
      type: ADD_DAIRY,
      payload: data.data,
    });
  };
};
