const request = require("request")

let getcodeAddress = (address, callback) => {
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback("Unable to connect to Google servers")
    } else if (body.status === "ZERO_RESULTS") {
      callback("Unable to find that address")
    } else if (body.status === "OK"){
      callback(undefined, {
        city: body.results[0].address_components[0].long_name,
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      })
    }
  })
}

module.exports.getcodeAddress = getcodeAddress
