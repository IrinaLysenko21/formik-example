import React, { Component } from "react";
import ReactDOM from "react-dom";
// import Form from "./components/1_UseFormik";
// import Form from "./components/2_Yup";
// import Form from "./components/3_ReducingBoilerplate";
// import MyForm from "./components/4_FormikComponent";
import MyForm from "./components/5_FieldRevisited";

import "./index.css";

class App extends Component {
  render() {
    return (
      <>
        <MyForm />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
