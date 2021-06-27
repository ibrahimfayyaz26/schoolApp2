import axios from "axios";
export const FETCH_NEWS = "FETCH_NEWS";
export const ADD_NEWS = "ADD_NEWS";

export const getNews = () => {
  return async (dispatch) => {
    const data = await axios.get("http://192.168.10.7:3000/News");
    // console.log(data.data);
    dispatch({
      type: FETCH_NEWS,
      payload: data.data,
    });
  };
};

export const postNews = (form) => {
  return async (dispatch) => {
    const data = await axios.post("http://192.168.10.7:3000/News", form, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    // console.log(data.data);
    dispatch({
      type: ADD_NEWS,
      payload: data.data,
    });
  };
};
