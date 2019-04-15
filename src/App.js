import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { d: new Date() };
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ time: Date.now() }),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let nowD = new Date().getTime();
    let gotD = new Date(2019, 3, 21, 18, 0, 0);
    let t = gotD - nowD;
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((t % (1000 * 60)) / 1000);
    return (
      <div className="App">
        <br style={{ lineHeight: "5" }} />
        <div className="title">alright fuckers, episode 2 is coming</div>
        <br style={{ lineHeight: "3" }} />
        <a href="https://fontmeme.com/game-of-thrones-font/">
          <img
            src="https://fontmeme.com/permalink/190414/9c428af13e849ebeaf654eac74ddd240.png"
            alt="game-of-thrones-font"
            border="0"
            height="40"
          />
        </a>
        <br />
        <a href="https://fontmeme.com/game-of-thrones-font/">
          <img
            src="https://fontmeme.com/permalink/190414/63fb69d3a6a03b392c36fc128d308473.png"
            alt="game-of-thrones-font"
            border="0"
            height="30"
          />
        </a>
        <br style={{ lineHeight: "5" }} />
        <div className="season"> Season 8 Episode 2</div>
        <div>
        { /* <img src="http://i.imgur.com/MAOay7V.png" height="90" /> */}
        {/*  <img src="https://i.imgur.com/NggooP0.png" height="90" /> */}
          <span className="episode">"Episode Title TBA"</span>
        {/*  <img src="http://i.imgur.com/AU1SENm.png" height="100" /> */}
        {/*  <img src="http://i.imgur.com/DSj7dEF.png" height="85" /> */}
        </div>
        <br style={{ lineHeight: "2" }} />
        <div className="white">
          <span style={{ fontWeight: "bold" }}>{days}</span> days &nbsp;
          <span style={{ fontWeight: "bold" }}>{hours}</span> hours &nbsp;
          <span style={{ fontWeight: "bold" }}>{mins}</span> minutes and &nbsp;
          <span style={{ fontWeight: "bold" }}>{secs}</span> seconds
        </div>
        <br style={{ lineHeight: "5" }} />
        <div className="yosemite">&copy; Yosemite Productions</div>
      </div>
    );
  }
}
