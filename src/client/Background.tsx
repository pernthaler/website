import React from "react";
import "./assets/less/Background.less";

export default class Background extends React.Component {
  background = React.createRef<HTMLDivElement>();
  addStars = () => {
    this.background.current.innerHTML = "";
    const diagonal = Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2));
    for (let i = 0; i < (0.03 * diagonal); i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.top = Math.floor(Math.random() * (window.innerHeight - 1)) + "px";
      star.style.left = Math.floor(Math.random() * (window.innerWidth - 1)) + "px";
      star.style.animationDuration = (Math.floor(Math.random() * 5) + 3) + "s";
      this.background.current.appendChild(star);
    }
  }
  componentDidMount() {
    window.addEventListener("resize", () => this.addStars());
    this.addStars();
  }
  render() {
    return (
      <div id="background" ref={this.background}/>
    );
  }
}