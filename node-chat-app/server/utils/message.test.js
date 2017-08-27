const expect = require("expect")

const { generateMessage, generateLocationMessage } = require("./message")

describe("generateMessage", () => {
  it("should generate the correct message object", () => {
    const from = "testUser"
    const text = "this is a test"
    const message = generateMessage(from, text)

    expect(message.createdAt).toBeA("number")
    expect(message).toInclude({ from, text })
  })
})

describe("generateLocationMessage", () => {
  it("should generate correct location message object", () => {
    const from = "testUser"
    const latitide = 100
    const longitude = 101
    const locationMessage = generateLocationMessage(from, latitide, longitude)

    const url = `https://www.google.com/maps?q=${latitide},${longitude}`

    expect(locationMessage.createdAt).toBeA("number")
    expect(locationMessage.url).toBeA("string")
    expect(locationMessage).toInclude({ from, url })
  })
})
