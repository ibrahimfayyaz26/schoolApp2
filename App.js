import React from "react";
import Main from "./Navigation/Main";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <>
      <Main />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
  );
}
