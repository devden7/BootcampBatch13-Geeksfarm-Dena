import { Component } from 'react';
import ListImages from './ListImages';

class ContentImage extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="grid grid-cols-4 gap-x-2 gap-y-0.5 auto-rows-auto mt-3">
        {data.map((value) => (
          <ListImages
            key={value.id}
            urlImage={value.urls.small}
            alt={value.alt_description}
          />
        ))}
      </div>
    );
  }
}

export default ContentImage;
