import axios from "axios";
export const FETCH_DS = "FETCH_DS";
export const ADD_DS = "ADD_DS";
import { url } from "../../url";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getDS = () => {
  return async (dispatch) => {
    const token = await AsyncStorage.getItem("token");

    const data = await axios.get(`${url}/DS`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(data.data);
    if (!data.data.unAuth) {
      dispatch({
        type: FETCH_DS,
        payload: data.data,
      });
    }
  };
};

export const postDS = (form) => {
  return async (dispatch) => {
    const token = await AsyncStorage.getItem("token");

    const data = await axios.post(`${url}/DS`, form, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(data.data);
    if (!data.data.unAuth) {
      dispatch({
        type: ADD_DS,
        payload: data.data,
      });
    }
  };
};
