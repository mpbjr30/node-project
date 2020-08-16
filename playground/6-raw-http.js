const https = require('http');

const url = 'http://api.weatherstack.com/current?access_key=a82c3bc699d50613689bdbcc729f05f8&query=45,-75&units=f';


const request = https.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString();
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    });
});

request.on('error', (error) => {
    console.log(error);
});

request.end();