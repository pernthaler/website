import React from "react";
import Page from "../Page";

export default class _404 extends React.Component {
  render() {
    return (
      <Page meta={{ title: "404", description: "The page you were looking for could not be found.", status: 404 }}>
        <h1>404</h1>
        <p>The page you were looking for could not be found.</p>
      </Page>
    );
  }
}