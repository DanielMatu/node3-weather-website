const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4522c9d97413c72ab7fb23b4d62b9b94&query=' + latitude.toString() +  ',' + longitude.toString() + '&units=m'
    request({ url, json: true }, (error, { body }) => {
        if (error){
            callback('Unable to connect to weather service', undefined)
        } else if (!body.location) {
            callback('Unable to find location', undefined)
        } else{
                callback (undefined,    
                body.current.weather_descriptions[0] + 
                '. It is currently ' + body.current.temperature + 
                ' degrees out. It feels like ' + body.current.feelslike +
                ' degrees out')
        }
    })
}

module.exports = forecast