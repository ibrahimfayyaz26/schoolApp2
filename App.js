import React from "react";
import Main from "./Navigation/Main";
import Toast from "react-native-toast-message";
import { Provider } from "react-redux";
import store from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <Main />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </Provider>
  );
}
