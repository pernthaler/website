import React from "react";
import "../assets/styles/Background.less";

export default class Background extends React.Component<unknown, { time: number, stars: { x: number, y: number, z: number }[] }> {
  private canvas: React.RefObject<HTMLCanvasElement>;
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    const stars = [];
    for (let i = 0; i < 1000; i++) {
      const star = {
        x: Math.random() * 1600 - 800,
        y: Math.random() * 900 - 450,
        z: Math.random() * 1000
      };
      stars.push(star);
    }
    this.state = { time: 0, stars };
  }
  resize = () => {
    const canvas = this.canvas.current;
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
  }
  init = (time: number) => {
    this.setState({ time });
    window.requestAnimationFrame(this.frame);
  }
  frame = (time: number) => {
    const canvas = this.canvas.current;
    const context = canvas.getContext("2d");

    const elapsed = time - this.state.time;
    const stars = this.state.stars;
    for (const star of stars) {
      star.z -= elapsed * 0.1;
      while (star.z <= 1) {
        star.z += 1000;
      }
    }
    this.setState({ time, stars });

    context.clearRect(0, 0, canvas.width, canvas.height);

    const w = document.body.clientWidth;
    const h = document.body.clientHeight;
    const wh = w / 2;
    const hh = h / 2;

    for (const star of this.state.stars) {
      const x = wh + star.x / (star.z * 0.001);
      const y = hh + star.y / (star.z * 0.001);

      if (x < 0 || x >= w || y < 0 || y >= h) {
        continue;
      }

      const d = star.z / 1000;
      const b = 1 - d * d;

      const intensity = b * 255;
      const rgb = "rgb(" + intensity + "," + intensity + "," + intensity + ")";
      context.fillStyle = rgb;
      context.fillRect(x, y, 2, 2);
    }

    window.requestAnimationFrame(this.frame);
  }
  componentDidMount() {
    window.addEventListener("resize", () => this.resize());
    this.resize();
    window.requestAnimationFrame(this.init);
  }
  render() {
    return (
      <canvas id="background" ref={this.canvas}/>
    );
  }
}