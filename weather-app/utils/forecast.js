
const request = require('request');

const forecast = (lat, long, cb) => {
    const url = 'http://api.weatherstack.com/current?access_key=a82c3bc699d50613689bdbcc729f05f8&query=' + lat + ',' + long + '&units=f';
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            cb('Unable to connect to weather', undefined)
        } else if (body.error) {
            cb('Unable to get weather for that location')
        } else {
            const { feelslike, temperature, weather_descriptions } = body.current;
            cb(undefined, {
                feelslike,
                temperature,
                description: weather_descriptions[0]
            })
        }
    })
}

module.exports = forecast;