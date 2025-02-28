import { Component } from 'react';

class ListImages extends Component {
  render() {
    return (
      <div className="w-40 h-40 bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden  flex justify-center items-center">
        <img
          src={this.props.urlImage}
          alt={this.props.alt}
          className="size-full object-cover"
        />
      </div>
    );
  }
}

export default ListImages;
