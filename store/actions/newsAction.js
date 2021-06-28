import axios from "axios";
export const FETCH_NEWS = "FETCH_NEWS";
export const ADD_NEWS = "ADD_NEWS";
import { url } from "../../url";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getNews = (fun) => {
  return async (dispatch) => {
    const token = await AsyncStorage.getItem("token");
    const data = await axios.get(`${url}/News`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(data.data);
    if (!data.data.unAuth) {
      dispatch({
        type: FETCH_NEWS,
        payload: data.data,
      });
    } else {
      AsyncStorage.removeItem("token");
      fun();
    }
  };
};

export const postNews = (form) => {
  return async (dispatch) => {
    const token = await AsyncStorage.getItem("token");
    const data = await axios.post(`${url}/News`, form, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(data.data);
    if (!data.data.unAuth) {
      dispatch({
        type: ADD_NEWS,
        payload: data.data,
      });
    }
  };
};
