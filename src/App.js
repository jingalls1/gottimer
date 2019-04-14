import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {d: new Date()};
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render(){
    let nowD = new Date().getTime();;
    let gotD = new Date(2019, 4, 14, 18, 0, 0);
    let t = gotD-nowD;
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((t % (1000 * 60)) / 1000);
  return (
    <div className="App">
      <br style={{lineHeight: "5"}}/>
      <h3 className="title">alright fuckers, the day has come</h3>
      <br style={{lineHeight: "3"}}/>
      <a href="https://fontmeme.com/game-of-thrones-font/"><img src="https://fontmeme.com/permalink/190414/9c428af13e849ebeaf654eac74ddd240.png" alt="game-of-thrones-font" border="0" height="40"/></a>
      <br/>
      <a href="https://fontmeme.com/game-of-thrones-font/"><img src="https://fontmeme.com/permalink/190414/63fb69d3a6a03b392c36fc128d308473.png" alt="game-of-thrones-font" border="0" height="35"/></a>
      <br style={{lineHeight: "5"}}/>
      <div className="white">
        <span style={{fontWeight: "bold"}}>{hours}</span> hours &nbsp;
        <span style={{ fontWeight: "bold" }}>{mins}</span> minutes and &nbsp;
        <span style={{ fontWeight: "bold" }}>{secs}</span> seconds
      </div>
    </div>
  );
}}
