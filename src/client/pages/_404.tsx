import React from "react";
import Page, { Props } from "../Page";

export default class _404 extends React.Component<Props, unknown> {
  render() {
    return (
      <Page title="404" description="The page you were looking for could not be found." status={404} {...this.props}>
        <h1>404</h1>
        <p>The page you were looking for could not be found.</p>
      </Page>
    );
  }
}