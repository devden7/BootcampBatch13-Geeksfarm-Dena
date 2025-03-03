import { Component } from 'react';
import UnsplashImage from './UnsplashImage';
import YoutubeVideo from './YoutubeVideo';

class FetchApi extends Component {
  render() {
    return (
      <section className="mt-3">
        <h2 className="h2-title">Fetch Api</h2>
        <UnsplashImage />
        <YoutubeVideo />
      </section>
    );
  }
}

export default FetchApi;
