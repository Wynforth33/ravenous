// Imports
import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/yelp';



// Create <App /> ['React'(Component)]; Builds Application Front-end
class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      businesses: []
    }
    this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      setState({
        businesses: businesses;
      })
    });
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={businesses} />
      </div>
    );
  }
}

// Exports
export default App; // <App />
