// Imports
import React from 'react'; //React Library
import './BusinessList.css'; //CSS stylesheet
import Business from '../Business/Business'; // <Business />

// Create <BusinessList /> ['React'(Component)]
class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        { //Function Creates a Business Instance for Each 'Business' in 'Businesses'
          //The sets a props key to the ['business'(Object)] for <Business /> to use.
          this.props.businesses.map(business => {
            return <Business key={business.id} business={business} />
          })
        }
      </div>
    );
  }
}

// Exports
export default BusinessList; // <BusinessList />
