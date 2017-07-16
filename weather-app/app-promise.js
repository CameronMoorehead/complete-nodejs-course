const yargs = require("yargs")
const axios = require("axios")

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "Address to fetch weather for",
      string: true
    }
  })
  .help()
  .alias("help", "h")
  .argv

const encodedAddress = encodeURIComponent(argv.address)
const GEOCODE_URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`


axios.get(GEOCODE_URL)
  .then(response => {
    if (response.data.status === "ZERO_RESULTS") {
      throw new Error("Unable to find that address.")
    }

    let data = response.data.results[0]
    let locationObject = {
      address: data.formatted_address,
      latitude: data.geometry.location.lat,
      longitude: data.geometry.location.lng
    }

    const API_KEY = "8a94b58e2d238e080696e5e851d0a444"
    const WEATHER_URL = `https://api.darksky.net/forecast/${API_KEY}/${locationObject.latitude},${locationObject.longitude}`

    console.log(locationObject.address)
    return axios.get(WEATHER_URL)
  })
  .then(response => {
    let temperature = response.data.currently.temperature
    let apparentTemperature = response.data.currently.apparentTemperature
    console.log(`Temperature is ${temperature} degrees F. But it feels like it's ${apparentTemperature}`)
  })
  .catch(error => {
    if (error.code === "ENOTFOUND") {
      console.log("Unable to connect to API's servers.")
    } else {
      console.log(error.message)
    }
  })
