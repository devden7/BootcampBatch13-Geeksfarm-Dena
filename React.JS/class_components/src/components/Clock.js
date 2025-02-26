import { Component } from 'react';

const getTime = () => {
  return new Date().toLocaleTimeString();
};

const SECOND_TIME = 1000;
class Clock extends Component {
  constructor() {
    super();
    this.state = {
      currentTime: getTime(),
    };
  }

  componentDidMount = () => {
    this.interval = setInterval(() => {
      this.setState({ currentTime: getTime() });
    }, SECOND_TIME);
  };

  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  render() {
    return (
      <div className="flex flex-wrap gap-2">
        <p>Current time : </p>
        <p className="font-bold">{this.state.currentTime}</p>
      </div>
    );
  }
}

export default Clock;
