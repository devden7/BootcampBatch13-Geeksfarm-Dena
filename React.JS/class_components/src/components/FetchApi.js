import { Component } from 'react';
import Form from './Form';
import YoutubeVideo from './YoutubeVideo';

class FetchApi extends Component {
  render() {
    return (
      <section className="mt-3">
        <h2 className="h2-title">Fetch Api</h2>
        <Form />
        <YoutubeVideo />
      </section>
    );
  }
}

export default FetchApi;
