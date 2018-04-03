// Imports
import React from 'react'; //React Library
import './SearchBar.css'; //CSS stylesheet

// Create <SearchBar /> ['React'(Component)]
class SearchBar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    // Yelp API sort_by options
    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active';
    } else {
      return '';
    }
  }

  handleSortByChange(e) {
    this.setState({sortBy: e.target.value});
  }

  handleTermChange(e){
    this.setState({term: e.target.value});
  }

  handleLocationChange(e){
    this.setState({location: e.target.value});
  }

  handleSearch(e){
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    e.preventDefault();
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (<li className={this.getSortByClass(sortByOptionValue)}
                  key={sortByOptionValue}
                  onClick={this.handleSortByChange}>
                {sortByOption}
             </li>);
    });
  }

  render(){
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input
            onChange={this.handleTermChange}
            placeholder="Search Businesses" />
          <input
            onChange={this.handleLocationChange}
            placeholder="Where?" />
          </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let&#39;s Go</a>
        </div>
      </div>
    )
  }
}

// Exports
export default SearchBar; // <SearchBar />
