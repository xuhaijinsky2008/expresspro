'use strict';

const supertest = require('supertest'); 
const test = require('unit.js');
const app = require('../app.js');

const request = supertest(app);

describe('Tests app', function() {
  it('verifies get', function(done) {
    request.get('/').expect(200).end(function(err, result) {
        test.string(result.res.text).contains('首页');
        test.value(result).hasHeader('content-type', 'text/html; charset=utf-8');
        done(err);
    });
  });
  it('verifies post', function(done) {
    request.post('/').expect(404).end(function(err, result) {
        test.value(result).hasHeader('content-type', 'text/html; charset=utf-8');
        done(err);
    });
  });
});
