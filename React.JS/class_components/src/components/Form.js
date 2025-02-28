import { Component } from 'react';
import axios from 'axios';
import { unsplashConfig } from '../config';
import ListImages from './ListImages';

class Form extends Component {
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
        <form onSubmit={this.handleSubmit} className="mt-3">
          <input
            type="search"
            value={this.state.value}
            onChange={this.handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-blue-700 block p-2.5"
            placeholder="Find an Image"
          />
        </form>

        {this.state.data.length === 0 && !this.state.isLoading && (
          <div>
            <p className="text-center">No images...</p>
          </div>
        )}
        {this.state.isLoading && (
          <div>
            <p className="text-center">Loading...</p>
          </div>
        )}
        {this.state.data.length > 0 && !this.state.isLoading && (
          <div className="columns-4 gap-x-4 gap-y-2 mt-3">
            {this.state.data.map((value) => (
              <ListImages
                key={value.id}
                urlImage={value.urls.small}
                alt={value.alt_description}
              />
            ))}
          </div>
        )}
      </>
    );
  }
}

export default Form;
