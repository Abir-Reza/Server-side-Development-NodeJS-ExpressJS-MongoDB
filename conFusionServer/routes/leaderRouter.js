const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());


leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    console.log('get method from /leaders');
    res.end('get method /leaders activated');
})
.post((req,res,next) => {
    res.end('Will add the dish: ' + req.body.name + ' with title: ' + req.body.title);
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('Not allowed to use PUT method in /leaders route'  );
})
.delete((req,res,next) => {
    res.end('DELETE method data from /leaders route');
});

leaderRouter.route('/:leaderId')
.get((req,res,next) => {
    console.log('get method from /leaders/:leaderId');
    res.end('get method of id  : ' + req.params.leaderId + ' activated');
})
.post((req,res,next) => {
    res.statusCode = 403;
    res.end('Not allowed to use POST method in' + req.params.leaderId + 'route'  );
})
.put((req,res,next) => {
    res.write('PUT is activated in ' + req.params.leaderId + '\n');
    res.end('The name is : ' +req.body.name+ ' and the Title is : '+req.body.title );
})
.delete((req,res,next) => {
    res.end('DELETE method data from ' +req.params.leaderId + 'route');
});


module.exports = leaderRouter; 