var express = require('express');
const request = require('request');
var router = express.Router();
const categoryUrl = 'http://api.dbstore.or.kr:8880/foodinfo/category.do';
const foodUrl = 'http://api.dbstore.or.kr:8880/foodinfo/list.do';
const foodDetailUrl = 'http://api.dbstore.or.kr:8880/foodinfo/food_detail.do';
const searchUrl = 'http://api.dbstore.or.kr:8880/foodinfo/search.do';

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/foodinfo/category', (req, res, next) => {
   request({
       url: categoryUrl,
       headers: {
           'x-waple-authorization' :  'NDAzLTE0OTkxNzMzNjEwMjItMWI3OGU4Y2MtNmJmZC00NWFjLWI4ZTgtY2M2YmZkODVhYzkz'
       }
   }, (error, response, body) => {
       //res.json(JSON.parse(body));
       res.send(body);
   });
})

router.get('/foodinfo/category/:code/:page', (req, res, next) => {
    //n=10&p=1&c=F3J05&s=food_name&o=u
    const codeParam =  req.param('code');
    const page = req.param('page');
    console.log(codeParam, page);
    request({
       url: foodUrl,
       headers: {
           'x-waple-authorization' :  'NDAzLTE0OTkxNzMzNjEwMjItMWI3OGU4Y2MtNmJmZC00NWFjLWI4ZTgtY2M2YmZkODVhYzkz'
       },
       qs: {
           uid : 'LS7CVJG3',
           n : 30,
           p: page,
           c: codeParam,
           s: 'food_name',
           o : 'u'
       }
   }, (error, response, body) => {
       //res.json(JSON.parse(body));
       res.send(body);
   });
})

router.get('/foodinfo/food-detail/:c/:s', (req, res, next) => {
    //n=10&p=1&c=F3J05&s=food_name&o=u
    const codeParam =  req.param('c');
    const seqParam = req.param('s');

    console.log(codeParam, seqParam);

    request({
       url: foodDetailUrl,
       headers: {
           'x-waple-authorization' :  'NDAzLTE0OTkxNzMzNjEwMjItMWI3OGU4Y2MtNmJmZC00NWFjLWI4ZTgtY2M2YmZkODVhYzkz'
       },
       qs: {
           uid : 'LS7CVJG3',
           c : codeParam,
           s: seqParam
       }
   }, (error, response, body) => {
       //res.json(JSON.parse(body));
       res.send(body);
   });
})

router.get('/foodinfo/search/:value', (req, res, next) => {
    const value = req.param('value');
    request({
       url: searchUrl,
       headers: {
           'x-waple-authorization' :  'NDAzLTE0OTkxNzMzNjEwMjItMWI3OGU4Y2MtNmJmZC00NWFjLWI4ZTgtY2M2YmZkODVhYzkz'
       },
       qs: {
           uid : 'LS7CVJG3',
           w: value, 
           n : 100,
           p: 1,
           s: 'food_name',
           o : 'u'
       }
    }, (error, response, body) => {
       //res.json(JSON.parse(body));
       res.send(body);
    });
})

module.exports = router;