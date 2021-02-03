const should = require('chai').should()
const calculator  = require('../app/calculator')

describe('Calculator tests using SHOULD interface from chai module: ', () => {
    describe('Check addTested function', () => {
        it('Check the returned value using: value.should.equal(value)', () => {
            result = calculator.addTested("text") // return '${arg} tested'
            // result.should.equal("text tested")
            result.should.equal("text tested")
        })

        it('Check the returned value using: value.should.be.a(value)', () => {
            result = calculator.addTested("text") // return '${arg} tested'
            result.should.be.a('string')
        })

        it('Check the returned value using: expect(value).to.have.a.lengthOf()', () => {
            result = calculator.addTested("text") // return '${arg} tested'
            result.should.have.lengthOf(11)
        })
    })
    
})
