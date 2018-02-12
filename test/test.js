'use strict';

var mongoose = require("mongoose");
var OnlineGrocery = require('./../models/onlineGroceryModel.js');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

// Mock Data
let products = [{
    "name" : "banana",
    "price" : 0.29,
    "stock" : 20,
    "updated" : "2014-01-02"
}, {
    "name" : "melon",
    "price" : 1.01,
    "stock" : 3,
    "updated" : "2014-03-28"
}, {
    "name" : "apple",
    "price" : 1.54,
    "stock" : 22,
    "updated" : "2014-02-05"
}, {
    "name" : "pear",
    "price" : 0.41,
    "stock" : 12,
    "updated" : "2014-04-19"
}, {
    "name" : "kumquat",
    "price" : 0.64,
    "stock" : 32,
    "updated" : "2014-06-10"
}, {
    "name" : "orange",
    "price" : 2.04,
    "stock" : 19,
    "updated" : "2014-05-25"
}, {
    "name" : "lemon",
    "price" : 1.56,
    "stock" : 9,
    "updated" : "2014-12-30"
}]

chai.use(chaiHttp);

describe('OnlineGrocery', () => {
    beforeEach((done) => {
        done();
    });

    // Test the /POST route
    describe('/POST products', () => {
        it('it should POST a list of products', (done) => {
            chai.request(server)
            .post('/products')
            .send(products)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
        });
    });

    // Test the /GET route
    describe('/GET products', () => {
        it('it should GET all the products', (done) => {
        chai.request(server)
            .get('/products')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
        });
    });

    describe('/GET products', () => {
        it('it should GET the product information by name', (done) => {
        chai.request(server)
            .get('/product/banana')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
        });
    });

    // Test the /PUT route
    describe('/PUT/product:productName', () => {
        it('it should UPDATE a product given the product name', (done) => {
            chai.request(server)
            .put('/product/banana')
            .send({ price: 1900 })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('price').eql(1900);
                done();
            });
        });
    });
});
