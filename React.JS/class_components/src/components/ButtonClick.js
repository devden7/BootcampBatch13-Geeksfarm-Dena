import { PureComponent } from 'react';

class Counting extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="flex items-center flex-col gap-2">
        <h1>You clicked {this.state.count} times</h1>
        <div>
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
            className="bg-blue-700 p-3 text-white cursor-pointer hover:bg-blue-800 duration-300 rounded-full"
          >
            Click me
          </button>
        </div>
      </div>
    );
  }
}

export default Counting;
