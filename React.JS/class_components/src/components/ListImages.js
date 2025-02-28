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
    this.setState({ height: this.imageRef.current.clientHeight });
  }
  render() {
    const heigthCss = `max-h-[${this.state.height}px] mb-2`;
    console.log(this.imageRef);
    return (
      <div className={`${heigthCss} `}>
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
