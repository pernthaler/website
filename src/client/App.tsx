import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaXing } from "react-icons/fa";
import Background from "./Background";
import "./assets/less/App.less";
import "./assets/less/Font.less";

export default class App extends React.Component {
  render() {
    return (
      <>
        <h1>Sebastian Pernthaler</h1>
        <h2>Software-Developer</h2>
        <ul>
          <li><a href="mailto:sebastian@pernthaler.me"><FaEnvelope/> Contact</a></li>
          <li><a target="_blank" rel="noreferrer" href="https://github.com/Pernthaler/Website"><FaGithub/> GitHub</a></li>
          <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/pernthaler/"><FaLinkedin/> LinkedIn</a></li>
          <li><a target="_blank" rel="noreferrer" href="https://www.xing.com/profile/Sebastian_Pernthaler"><FaXing/> Xing</a></li>
        </ul>
        <Background/>
        <noscript>
          <p id="noscript">All animations have been disabled.</p>
        </noscript>
      </>
    );
  }
}