import React from "react";
import { Switch, Route } from "react-router-dom";
import Index from "./pages";
import _404 from "./pages/404";
import "./assets/less/App.less";
import "./assets/less/Font.less";

export default class App extends React.Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" component={Index}/>
          <Route path="*" component={_404}/>
        </Switch>
    );
  }
}