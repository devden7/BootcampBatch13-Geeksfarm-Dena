import { Component } from 'react';

class Loading extends Component {
  render() {
    const { content, isLoading } = this.props;
    return (
      isLoading && (
        <div>
          <p className="text-center">{content}</p>
        </div>
      )
    );
  }
}

export default Loading;
