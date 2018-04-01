//  Imports
import React from 'react';
import './Business.css';

// Create <Business /> ['React'(Component)]
class Business extends React.Component {
  render() {
    const bizProps= this.props.business; // capture ['business'(Props-Object)]
    return ( // Create Business Listing.
      <div className="Business">
        <div className="image-container">
          <img src={bizProps.imageSrc} alt=''/>
        </div>
        <h2>{bizProps.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{bizProps.address}</p>
            <p>{bizProps.city}</p>
            <p>{`${bizProps.state} ${bizProps.zipCode}`}</p>
          </div>
          <div className="Business-reviews">
            <h3>{bizProps.category.toUpperCase()}</h3>
            <h3 className="rating">{`${bizProps.rating} stars`}</h3>
            <p>{`${bizProps.reviewCount} reviews`}</p>
          </div>
        </div>
      </div>
    );
  }
}

// Exports
export default Business; // <Business />
