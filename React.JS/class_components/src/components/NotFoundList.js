import { Component } from 'react';

class NotFoundList extends Component {
  render() {
    const { content, data, isLoading } = this.props;
    return (
      data.length === 0 &&
      !isLoading && (
        <div>
          <p className="flex justify-center items-center h-20">{content}</p>
        </div>
      )
    );
  }
}

export default NotFoundList;
