import { Component } from 'react';

const getTime = () => {
  return new Date().toLocaleTimeString();
};

const SECOND_TIME = 1000;
class Clock extends Component {
  constructor() {
    super();
    this.state = {
      currentTime: '',
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
      <div className="text-center mt-4">
        <h2>Current time</h2>
        <p>{this.state.currentTime}</p>
      </div>
    );
  }
}

export default Clock;
