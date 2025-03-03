import { Component } from 'react';
import { youtubeConfig } from '../../config';
import axios from 'axios';
import SearchInput from '../SearchInput';
import NotFoundList from '../NotFoundList';
import Loading from '../Loading';
import ContentVideo from './ContentVideo';

class YoutubeVideo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      filter: 0,
      data: [],
      isLoading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
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
        url: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${this.state.search}&key=${youtubeConfig.API_KEY}`,
      });

      this.setState({ data: response.data.items });
    } catch (error) {
      alert(error.message);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  handleFilter(index) {
    this.setState({ filter: index + 1 });
  }

  render() {
    const filterData = this.state.data.filter(
      (_, index) => index === this.state.filter
    );
    return (
      <>
        <SearchInput
          search={this.state.search}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          type="youtube"
        />
        <NotFoundList
          content="No videos..."
          data={this.state.data}
          isLoading={this.state.isLoading}
        />

        <Loading content="Loading..." isLoading={this.state.isLoading} />

        {this.state.data.length > 0 && !this.state.isLoading && (
          <ContentVideo
            data={this.state.data}
            filterData={filterData}
            handleFilter={this.handleFilter}
          />
        )}
      </>
    );
  }
}

export default YoutubeVideo;
