import React from "react";
import Page, { Props } from "../Page";

export default class Test extends React.Component<Props, unknown> {
  render() {
    return (
      <Page title="Test" description="Hello World!" {...this.props}>
        <h1>Test</h1>
        <p>Hello World!</p>
      </Page>
    );
  }
}