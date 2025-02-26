import { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = { search: '' };
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
      event.preventDefault();
      await axios({
        method: 'get',
        url: `https://api.unsplash.com/search/photos?query=${this.state.search}`,
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="mt-3">
        <input
          type="search"
          value={this.state.value}
          onChange={this.handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-blue-700 block p-2.5"
          placeholder="Find an Image"
        />
      </form>
    );
  }
}

export default Form;
