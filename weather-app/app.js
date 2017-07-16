const yargs = require("yargs")

const geocode = require("./geocode/geocode.js")
const weather = require("./weather/weather.js")

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

geocode.getcodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage)
  } else {
    weather.getWeather(
      results.latitude,
      results.longitude,
      (errorMessage, weatherResults) => {
        if (errorMessage) {
          console.log("Error:", errorMessage)
        } else {
          console.log(`It is ${weatherResults.temperature} degrees in ${results.city}`)
        }
    })
  }
})
