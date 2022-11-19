require('dotenv').config()

let query = '60634'

let addons = '&categories=bbq&limit=3'

query = query.concat(addons)

var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${process.env.API_KEY}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

let newRestaurants
const init = async () =>{
  await fetch(`https://api.yelp.com/v3/businesses/search?location=${query}`, requestOptions)
    .then(response => response.json())  
    .then((items => { 
          // console.log(items)
          const restaurantData = items.businesses.map((restaurant) => ({
            restaurantId: restaurant.id,
            name: restaurant.name,
            image_url: restaurant.image_url,
            categories: restaurant.categories[0].title,
            display_phone: restaurant.display_phone,
            location: restaurant.location.display_address[0].concat(', ',restaurant.location.display_address[1]),
            is_closed: restaurant.is_closed
          }));
          // console.log(restaurantData)
          newRestaurants = restaurantData
          return restaurantData
        }))
    // .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
init()

setTimeout(() => {
  console.log(newRestaurants)
}, "500")


