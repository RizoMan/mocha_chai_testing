const assert = require('chai').assert
const calculator  = require('../app/calculator')

describe("Calculator tests using ASSERT interface from chai module: ", () => {
    describe("Check addTested Function: ", () => {
        it("Check the returned value using assert.equal(value, 'value'): ", () => {
            result = calculator.addTested("text")
            assert.equal(result, "text tested")
        })
        
        it("Check the returned value using: assert.typeOf(value, 'value'): ", () => {
            result = calculator.addTested("text")
            assert.typeOf(result, "string")
        })

        it("Check the returned value using: assert.lengthOf(value, 'value'): ", () => {
            result = calculator.addTested("lala")
            assert.lengthOf(result, 11)
        })
    })
})