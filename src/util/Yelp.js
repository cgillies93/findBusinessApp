const apiKey = "p-bDOy4_uzbtr7NaTkYPljEfXGc36YHjMF7PVin2V91lsNKXYfk5LGJ847NQ3SW-xwEQwezh--JFvaAVGRmh_xj69WuxJ_fXZ-GweeELiR40865epPLuSgf1Sm2PXnYx";
const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    })
    .then(response => {
      return response.json();
    })
    .then(jsonResponse => {
      if(jsonResponse.businesses){
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
            websiteUrl: business.url
          };
        });
      }
    });
  }


};


export default Yelp;
