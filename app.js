
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , auth = require('./routes/auth')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

app.get('/collage1', routes.collage1);
app.get('/diary1/:id', user.displayDiary);
app.post('/saveDiary1', user.saveImageDiary1);
app.post('/saveDiary2', user.saveImageDiary2);
app.post('/saveDiary3', user.saveImageDiary3);
app.get('/getDiary1', user.getDiary1);
app.get('/getDiary2', user.getDiary2);
app.get('/getDiary3', user.getDiary3);
app.get('/next', user.nextPage);
app.get('/getDiaries/:id', user.getDiaries);
app.post('/listDiaries', user.listDiaries);

//collage

app.post('/uservalue', user.saveImage);
app.get('/uservalue', user.getImage);
//
app.post('/login',auth.login);
app.post('/signUp',auth.signUp);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

