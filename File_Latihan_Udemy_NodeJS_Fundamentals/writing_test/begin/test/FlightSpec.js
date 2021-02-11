var app = require('./helpers/app');

var should = require('should'),
    supertest = require('supertest');

describe('flights', function(){
    it('should pass', function(done) {
        done();
    });

    it('shouldnt pass', function(done) {
        throw "don't pass";
        done();
    });
});