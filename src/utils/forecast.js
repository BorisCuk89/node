const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5568fa2417acceb6822dc3b7e697a46e&query=' + latitude + ',' + longitude + '&units=f'

    request({ url: url, json: true }, (error, response) => {

        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log(response.body.current)
            callback(
                undefined, 
                response.body.current.weather_descriptions[0] + 
                ". It is currently " + 
                response.body.current.temperature + 
                " degress out." + 
                " Current wind speed is " + response.body.current.wind_speed )
        }
    })
}

module.exports = forecast