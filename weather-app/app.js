const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const myArgs = process.argv

geocode(myArgs[2], (error, data) => {
    const { latitude, longitude, location } = data;
    if (!myArgs[2]) {
        return console.log("Please provide an address")
    }
    if (error) {
        return console.log("Error " + error);
    }

    forecast(latitude, longitude, (error, result) => {
        const { description, temperature, feelslike } = result;
        if (error) {
            return console.log("Error " + error);
        }
        console.log("Location: " + location, " Latitude: " + latitude + " Longitude: " + longitude);
        console.log("It is currently " + description + " with a temperature of " + temperature + " degrees out.  Feels like " + feelslike + " degrees out.");
    })

})






