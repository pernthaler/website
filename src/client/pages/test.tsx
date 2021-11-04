import React from "react";
import Page, { Props } from "../Page";
import Background from "../components/Background";

export default class Test extends React.Component<Props, unknown> {
  render() {
    return (
      <Page title="Test" description="Hello World!" {...this.props}>
        <Background/>
        <h1>Test</h1>
        <h2>Hello World!</h2>
      </Page>
    );
  }
}