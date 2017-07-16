const request = require("request")

let requestWrapper = (address) => {
  return new Promise((resolve, reject) => {
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
      json: true
    }, (error, response, body) => {
      if (error) {
        reject("Unable to connect to Google servers.")
      } else if (body.status === "ZERO_RESULTS") {
        reject("Unable to find that addresss.")
      } else if (body.status === "OK") {
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        })
      }
    })
  })
}

requestWrapper("00000")
  .then(results => {
    console.log("Success", JSON.stringify(results, undefined, 2))
  })
  .catch(errorMessage => {
    console.log(errorMessage)
  })
