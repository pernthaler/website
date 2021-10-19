import React from "react";
import "./assets/less/Background.less";

type State = {
  stars: {
    top: string,
    left: string,
    animationDuration: string
  }[]
};

export default class Background extends React.Component<unknown, State> {
  constructor(props) {
    super(props);
    this.state = {
      stars: []
    };
  }
  setStars = () => {
    const stars = [];
    const diagonal = Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2));
    for (let i = 0; i < (0.03 * diagonal); i++) {
      stars.push({
        top: Math.floor(Math.random() * (window.innerHeight - 1)) + "px",
        left: Math.floor(Math.random() * (window.innerWidth - 1)) + "px",
        animationDuration: (Math.floor(Math.random() * 5) + 3) + "s"
      });
    }
    this.setState({ stars });
  }
  componentDidMount() {
    window.addEventListener("resize", () => this.setStars());
    this.setStars();
  }
  render() {
    return (
      <div id="background">
        {this.state.stars.map((style, index) => (
          <div key={index} className="star" style={style}/>
        ))}
      </div>
    );
  }
}