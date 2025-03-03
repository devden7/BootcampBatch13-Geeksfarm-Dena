import { Component } from 'react';

class SearchInput extends Component {
  render() {
    const { type, search, handleSubmit, handleChange } = this.props;
    const placeHolderInput =
      type === 'youtube' ? 'Find youtube video' : 'Find an Image';
    return (
      <form onSubmit={handleSubmit} className="mt-3">
        <input
          type="search"
          value={search}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-blue-700 block p-2.5"
          placeholder={placeHolderInput}
        />
      </form>
    );
  }
}

export default SearchInput;
