const expect = require("expect")

const utils = require("./utils")

describe("Utils", () => {

  describe("#add", () => {
    it("should add two numbers", () => {
      let res = utils.add(33, 11)

      expect(res)
        .toBe(44)
        .toBeA("number")
    })
  })
  
  describe("#asyncAdd", () => {
    it("should async add two numbers", (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum)
          .toBe(7)
          .toBeA("number")
        done()
      })
    })
  })

  it("should square a number", () => {
    let res = utils.square(6)

    expect(res)
      .toBe(36)
      .toBeA("number")
  })

  it("should async square two numbers", (done) => {
    utils.asyncSquare(3, res => {
      expect(res)
        .toBe(9)
        .toBeA("number")
      done()
    })
  })

  it("should verify first and last names are set", () => {

    let user = utils.setName({}, "Cameron Moorehead")

    expect(user)
      .toInclude({
        firstName: "Cameron",
        lastName: "Moorehead"
      })
      .toBeA("object")
  })
})
