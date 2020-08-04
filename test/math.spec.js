const Math = require('../src/math.js');
const expect = require('chai').expect;
const sinon = require('sinon')

describe('Mach class', function() {
    const math = new Math();
    
    it('Sum two numbers', function(done) {
        math.sum(5, 5, value => {
            expect(value).to.equal(10)
            done();
        });
    });

    it('Multiply two numbers', function() {
        expect(math.multiply(10, 5)).to.equal(50);
    })

    it('Subtraction of two numbers', function() {        
        expect(math.subtraction(10, 5)).to.equal(5);
    });

    it('Calls req with sum and index values', function() {
        //const req = {};
        const res = {
            load: sinon.spy()
        };

        math.printsum(res, 5, 5);
        expect(res.load.calledOnce).to.be.true;
    });
});
