import axios from "axios";
export const FETCH_DAIRY = "FETCH_DAIRY";
export const ADD_DAIRY = "ADD_DAIRY";
import { url } from "../../url";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getDairy = () => {
  return async (dispatch) => {
    const token = await AsyncStorage.getItem("token");

    const data = await axios.get(`${url}/Dairy`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(data.data);
    if (!data.data.unAuth) {
      dispatch({
        type: FETCH_DAIRY,
        payload: data.data,
      });
    }
  };
};

export const postDairy = (body) => {
  return async (dispatch) => {
    const token = await AsyncStorage.getItem("token");

    const data = await axios.post(`${url}/Dairy`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(data.data);
    if (!data.data.unAuth) {
      dispatch({
        type: ADD_DAIRY,
        payload: data.data,
      });
    }
  };
};
