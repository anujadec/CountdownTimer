import React from "react";

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.number };
  }

  timer() {
    this.setState({
      count: this.state.count - 1
    });
    if (this.state.count < 1) {
      clearInterval(this.intervalId);
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>{this.state.count}</h1>
        {this.state.count === 0 && (
          <h2>
            <span>Time's Up</span>
          </h2>
        )}
      </div>
    );
  }
}

export default Countdown;
