const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());


promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
.get((req,res,next) => {
    console.log('get method from /promotion');
    res.end('get method /promotions activated');
})
.post((req,res,next) => {
    res.end('Will add the dish: ' + req.body.name + ' with title: ' + req.body.title);
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('Not allowed to use PUT method in /promotions route'  );
})
.delete((req,res,next) => {
    res.end('DELETE method data from /promotions route');
});

promoRouter.route('/:promoId')
.get((req,res,next) => {
    console.log('get method from /promotion/:promoID');
    res.end('get method of id  : ' + req.params.promoId + ' activated');
})
.post((req,res,next) => {
    statusCode = 403;
    res.end('Not allowed to use POST method in' + req.params.promoId + 'route'  );
})
.put((req,res,next) => {
    res.write('PUT is activated in ' + req.params.promoId + '\n');
    res.end('The name is : ' +req.body.name+ ' and the Title is : '+req.body.title );
})
.delete((req,res,next) => {
    res.end('DELETE method data from ' +req.params.promoId + 'route');
});


module.exports = promoRouter; 