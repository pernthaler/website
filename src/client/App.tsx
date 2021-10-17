import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaXing } from "react-icons/fa";
import "./assets/less/App.less";
import "./assets/less/Fonts.less";

export default class App extends React.Component {
  background = React.createRef<HTMLDivElement>();
  addStars = () => {
    this.background.current.innerHTML = "";
    for (let i = 0; i < 25 * (window.innerWidth / window.innerHeight); i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.top = Math.floor(Math.random() * (window.innerHeight - 1)) + "px";
      star.style.left = Math.floor(Math.random() * (window.innerWidth - 1)) + "px";
      star.style.animationDuration = (Math.floor(Math.random() * 10) + 3) + "s";
      this.background.current.appendChild(star);
    }
  }
  componentDidMount() {
    window.addEventListener("resize", () => this.addStars());
    this.addStars();
  }
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
        <div id="background" ref={this.background}/>
        <noscript>
          <p id="noscript">All animations have been disabled.</p>
        </noscript>
      </>
    );
  }
}