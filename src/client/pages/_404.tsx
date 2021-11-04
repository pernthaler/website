import React from "react";
import Page, { Props } from "../Page";
import Background from "../components/Background";

export default class _404 extends React.Component<Props, unknown> {
  render() {
    return (
      <Page title="404" description="The page you were looking for could not be found." status={404} {...this.props}>
        <Background/>
        <h1>404</h1>
        <h2>The page you were looking for could not be found.</h2>
      </Page>
    );
  }
}