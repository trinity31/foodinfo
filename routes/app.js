var express = require('express');
const request = require('request');
var router = express.Router();
const categoryUrl = 'http://api.dbstore.or.kr:8880/foodinfo/category.do';
const foodUrl = 'http://api.dbstore.or.kr:8880/foodinfo/list.do';

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
           n : 100,
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

module.exports = router;