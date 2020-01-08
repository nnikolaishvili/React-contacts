import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
