import React from 'react';
import './search-bar.scss';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = { searchText: '' };
  }

  onFormSubmit = e => {
    e.preventDefault();
    const term = this.state.searchText.trim();

    if (term) {
      this.props.onSubmit(term);
    }

    this.setState({ searchText: '' });
  };

  render() {
    return (
      <div className="search-bar">
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
