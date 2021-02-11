var app = require('./helpers/app');

var should = require('should'),
	supertest = require('supertest');

describe('flights', function () {
	
	it('should return valid flight data for flight 18', function (done) {
		supertest(app)
		.get('flight/18')
		.end(function (err,res ) {
			res.status.should.equal(200);
			done();
		})
	});

	it('should not pass', function (done) {
		// throw "don't pass";
		done();
	});

});