import { Component } from 'react';
import axios from 'axios';
import { unsplashConfig } from '../../config';
import SearchInput from '../SearchInput';
import NotFoundList from '../NotFoundList';
import Loading from '../Loading';
import ContentImage from './ContentImage';

class UnsplashImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      data: [],
      isLoading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      search: event.target.value,
    });
  }

  async handleSubmit(event) {
    try {
      this.setState({ isLoading: true });
      event.preventDefault();
      const response = await axios({
        method: 'get',
        url: `https://api.unsplash.com/search/photos?query=${this.state.search}`,
        headers: {
          Authorization: `Client-ID ${unsplashConfig.KEY_UNSPLASH}`,
        },
      });
      this.setState({ data: response.data.results });
    } catch (error) {
      alert(error.message);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <>
        <SearchInput
          search={this.state.search}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          type="unsplash"
        />

        <NotFoundList
          content="No images..."
          data={this.state.data}
          isLoading={this.state.isLoading}
        />

        <Loading content="Loading..." isLoading={this.state.isLoading} />

        {this.state.data.length > 0 && !this.state.isLoading && (
          <ContentImage data={this.state.data} />
        )}
      </>
    );
  }
}

export default UnsplashImage;
