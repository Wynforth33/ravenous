// Imports
import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

// Yelp API ['business'(Object)]; at this point only a static example.
const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

// Array of Yelp API ['business'(Object)]'s; at this point only 6 replications of static example.
const businesses = [
  business,
  business,
  business,
  business,
  business,
  business,
];

// Create <App /> ['React'(Component)]; Builds Application Front-end
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar /> 
        <BusinessList businesses={businesses} />
      </div>
    );
  }
}

// Exports
export default App; // <App />
