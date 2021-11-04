import React from "react";
import { Switch } from "react-router-dom";
import Index from "./pages";
import Test from "./pages/test";
import _404 from "./pages/_404";

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Index exact path="/"/>
        <Test path="/test"/>
        <_404 path="*"/>
      </Switch>
    );
  }
}