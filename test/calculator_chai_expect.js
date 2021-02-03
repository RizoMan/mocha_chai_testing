const expect = require('chai').expect
const calculator  = require('../app/calculator')

describe('Calculator tests using EXPECT interface from chai module: ', () => {
    describe('Check addTested function', () => {
        it("Check the returned value using: expect(value).to.equal('value'): ", () => {
            result = calculator.addTested("text")
            expect(result).to.equal("text tested")
        })

        it("Check the returned value using: expect(value).to.be.a('value')): ", () => {
            result = calculator.addTested("text")
            expect(result).to.be.a('string')
        })

        it("Check the returned value using: expect(value).to.have.lengthOf(value): ", () => {
            result = calculator.addTested("text")
            expect(result).to.have.lengthOf(11)
        })
    })
})