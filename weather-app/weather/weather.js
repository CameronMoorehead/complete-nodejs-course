const request = require("request")

const API_KEY = "8a94b58e2d238e080696e5e851d0a444"

let getWeather = (latitude, longitude, callback) => {
request({
  url: `https://api.darksky.net/forecast/${API_KEY}/${latitude},${longitude}`,
  json: true
}, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    callback(undefined, {
      temperature: body.currently.temperature,
      apparentTemperature: body.currently.apparentTemperature
    })
  } else {
    callback("Unable to fetch weather")
  }
})
}

module.exports.getWeather = getWeather
