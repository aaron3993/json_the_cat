const args = process.argv.slice(2);
const request = require('request');

// fetchBreedDescription('Siberian', (error, description) {

if (!args[0]) {
  console.log("Breed not found");
  return;
}
request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
  if (error) {
    console.log("Error: ", error);
    return;
  }
  const data = JSON.parse(body);
  if (!data[0]) {
    console.log(data.error);
    return;
  }
  const description = data[0].description;
  console.log(description);
});
// });

// module.exports = { fetchBreedDescription };