// Imports
import React from 'react'; //React Library
import './SearchBar.css'; //CSS stylesheet

// Yelp API sort_by options
const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
}

// Create <SearchBar /> ['React'(Component)]
class SearchBar extends React.Component {

  // Uses the 'String-Keys' in 'sortByOptions' to create <li> elements with the
  // 'Value' of 'sortByOptions - String-Keys'
  renderSortByOptions(){
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>;
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
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
          </div>
        <div className="SearchBar-submit">
          <a>Let&#39;s Go</a>
        </div>
      </div>
    )
  }
}

// Exports
export default SearchBar; // <SearchBar />
