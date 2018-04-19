// Yelp API Key
const apiKey = '4kmFyBBpdnMCBgL_kK9Txbn3G4oIyvzhm2LgApX_pr8KdNsc6lMlQhGaypboYWAzqO6iYJkI4fcxC4E4x1pcDRYMl3hERqJtYqwevEYQoJak6pqM6cj-30-5mNzHWnYx';

// Yelp API Object - Handles the Yelp Search Object/Function
const Yelp = {
  search(term, location, sortBy){
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
}

export default Yelp;
