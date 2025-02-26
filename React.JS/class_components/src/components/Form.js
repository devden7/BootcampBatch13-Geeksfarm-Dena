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
        url: `https://api.unsplash.com/search/photos?quey=${this.state.search}`,
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
      <form
        onSubmit={this.handleSubmit}
        className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm"
      >
        <label className="font-semibold text-2xl mb-5">Image Search</label>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          className="border-2 border-gray-200 p-2 rounded-md mt-5"
        />
      </form>
    );
  }
}

export default Form;
