const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  if (!breedName) {
    console.log("Breed not found");
    return;
  }
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback("Error: " + error, null);
      return;
    }
    const data = JSON.parse(body);
    if (!data[0]) {
      callback("Breed not found", null);
      return;
    }
    const description = data[0].description;
    callback(null, description);
  });
};

module.exports = { fetchBreedDescription };