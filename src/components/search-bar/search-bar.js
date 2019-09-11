import React from 'react';
import './search-bar.scss';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = { searchText: '' };
  }

  onFormSubmit = e => {
    e.preventDefault();
    this.setState({ searchText: '' });

    console.log(this.state.searchText);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label className="search-bar__label" htmlFor="search">
            Search
          </label>
          <input
            id="search"
            value={this.state.searchText}
            onChange={e => this.setState({ searchText: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
