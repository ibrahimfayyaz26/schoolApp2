export const USER = "USER";

export const getUser = (data) => {
  return async (dispatch) => {
    // console.log(data);
    dispatch({
      type: USER,
      payload: data,
    });
  };
};
