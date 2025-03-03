import { Component } from 'react';

class Counting extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="flex items-center justify-center flex-col gap-2 h-96">
        <p className="text-xl">
          You clicked{' '}
          <span className="text-3xl text-blue-700 font-bold">
            {this.state.count}{' '}
          </span>
          times
        </p>
        <div>
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
            className="btn-primary"
          >
            Click me
          </button>
        </div>
      </div>
    );
  }
}

export default Counting;
