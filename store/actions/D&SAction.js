import axios from "axios";
export const FETCH_DS = "FETCH_DS";
export const ADD_DS = "ADD_DS";

export const getDS = () => {
  return async (dispatch) => {
    const data = await axios.get("http://192.168.31.130:3000/DS");
    // console.log(data.data);
    dispatch({
      type: FETCH_DS,
      payload: data.data,
    });
  };
};

export const postDS = (form) => {
  return async (dispatch) => {
    const data = await axios.post("http://192.168.31.130:3000/DS", form, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    // console.log(data.data);
    dispatch({
      type: ADD_DS,
      payload: data.data,
    });
  };
};
