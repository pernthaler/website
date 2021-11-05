import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaXing } from "react-icons/fa";
import Page from "../Page";
import Background from "../components/Background";
import "../assets/styles/Index.less";

export default class Index extends React.Component {
  render() {
    return (
      <Page id="index" meta={{ title: "", description: "Software-Developer" }}>
        <Background/>
        <h1>Sebastian Pernthaler</h1>
        <h2>Software-Developer</h2>
        <ul>
          <li><a href="mailto:sebastian@pernthaler.me"><FaEnvelope/> Contact</a></li>
          <li><a target="_blank" rel="noreferrer" href="https://github.com/Pernthaler/Website"><FaGithub/> GitHub</a></li>
          <li><a target="_blank" rel="noreferrer" href="https://www.xing.com/profile/Sebastian_Pernthaler"><FaXing/> Xing</a></li>
          <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/pernthaler/"><FaLinkedin/> LinkedIn</a></li>
        </ul>
        <noscript>
          <p id="noscript">All animations have been disabled.</p>
        </noscript>
      </Page>
    );
  }
}