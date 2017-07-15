const request = require("request")

// const yargs = require("yargs")
//
// const geocode = require("./geocode/geocode.js")
//
// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: "address",
//       describe: "Address to fetch weather for",
//       string: true
//     }
//   })
//   .help()
//   .alias("help", "h")
//   .argv
//
// geocode.getcodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage)
//   } else {
//     console.log(JSON.stringify(results, undefined, 2))
//   }
// })

const API_KEY = "8a94b58e2d238e080696e5e851d0a444"

request({
  url: `https://api.darksky.net/forecast/${API_KEY}/47.1971241,-122.3213693`,
  json: true
}, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(body.currently.temperature)
  } else {
    console.log("Unable to fetch weather")
  }
})
