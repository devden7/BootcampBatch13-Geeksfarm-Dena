import { Component } from 'react';
import { youtubeConfig } from '../config';
import axios from 'axios';

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
        url: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${this.state.search}&key=${youtubeConfig.API_KEY}`,
      });

      this.setState({ data: response.data.items });
    } catch (error) {
      alert(error.message);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  handleFilter(index) {
    this.setState({ filter: index });
  }

  render() {
    const filterData = this.state.data.filter(
      (_, index) => index === this.state.filter
    );
    return (
      <>
        <form onSubmit={this.handleSubmit} className="mt-3">
          <input
            type="search"
            value={this.state.value}
            onChange={this.handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-blue-700 block p-2.5"
            placeholder="Find youtube video"
          />
        </form>
        {this.state.data.length === 0 && !this.state.isLoading && (
          <div>
            <p className="text-center">No videos...</p>
          </div>
        )}
        {this.state.isLoading && (
          <div>
            <p className="text-center">Loading...</p>
          </div>
        )}
        {this.state.data.length > 0 && !this.state.isLoading && (
          <div className="flex gap-2 mt-3">
            {/* mainVideo */}
            <div className="w-[60%]">
              <div className="h-[400px] rounded-xl">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${filterData[0].id.videoId}`}
                  allowFullScreen
                  title="Youtube"
                ></iframe>
              </div>
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm mt-3">
                <h3 className="font-semibold">{filterData[0].snippet.title}</h3>
                <p className="mt-3">{filterData[0].snippet.description}</p>
              </div>
            </div>
            {/* sidebarVideo */}
            <div className=" w-[40%] flex flex-col gap-5">
              {this.state.data.map((item, index) => (
                <div
                  className="h-32 flex justify-around items-center gap-3 cursor-pointer"
                  key={item.etag}
                  onClick={() => this.handleFilter(index)}
                >
                  <div className="bg-red-500 h-28 overflow-hidden w-56">
                    <img
                      width="100%"
                      height="100%"
                      src={item.snippet.thumbnails.high.url}
                      allowFullScreen
                      alt="Youtube"
                    ></img>
                  </div>
                  <div className="max-w-[35%]">
                    <p>{item.snippet.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default YoutubeVideo;
