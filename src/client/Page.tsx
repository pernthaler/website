import React from "react";
import { Route } from "react-router-dom";
import "./assets/less/Font.less";
import "./assets/less/Page.less";

export type Props = {
  exact?: boolean,
  path: string
};

export default class Page extends React.Component<{ children: React.ReactNode, exact?: boolean, path: string, title: string, description: string, status?: number }, unknown> {
  render() {
    return (
      <Route exact={this.props.exact} path={this.props.path} render={({ staticContext }) => {
        if (staticContext) {
          staticContext.title = this.props.title;
          staticContext.description = this.props.description;
          if (this.props.status) staticContext.status = this.props.status;
        }
        return this.props.children;
      }}/>
    );
  }
}