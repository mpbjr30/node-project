const request = require('request');

const geocode = (address, cb) => {
    const url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoibXBianIzMCIsImEiOiJja2N6bGthY2swNGVjMnRuMm01dmN6cTFvIn0.Dg9b5pvqQapi7Y5SD-7HaQ&limit=1';
    request({ url, json: true }, (error, response) => {
        const { center, place_name } = response.body.features[0]
        if (error) {
            cb('Unable to connect to location services', undefined)
        } else if (response.body.features.length === 0) {
            cb('Unable to find location.', undefined)
        } else {
            cb(undefined, {
                longitude: center[0],
                latitude: center[1],
                location: place_name
            })
        }
    })
}

module.exports = geocode;