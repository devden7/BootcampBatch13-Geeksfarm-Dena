import { Component, createRef } from 'react';

class ListImages extends Component {
  imageRef = createRef();
  constructor() {
    super();
    this.state = {
      height: 0,
    };
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', () => {
      this.setState({
        height: Math.ceil(this.imageRef.current.clientHeight / 10),
      });
    });
  }
  render() {
    return (
      <div style={{ gridRowEnd: `span ${this.state.height}` }}>
        <img
          src={this.props.urlImage}
          alt={this.props.alt}
          ref={this.imageRef}
        />
      </div>
    );
  }
}

export default ListImages;
