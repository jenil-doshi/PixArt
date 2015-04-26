
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , auth = require('./routes/auth')
  , http = require('http')
  , path = require('path')
  , session = require('express-session');

var app = express();

app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({ secret: 'keyboard cat', cookie: { maxAge: 3000000 }}));
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


<<<<<<< HEAD
app.get('/diary1/:id', user.displayDiary);
=======

app.get('/diary1/:id', user.displayDiary);

>>>>>>> 4753e05b381646605495032ffaf0efd34f1cec9f

app.get('/collage2', routes.collage2);
app.post('/saveCollage2', user.saveCollage2);
app.get('/displayCollage2', user.displayCollage2);

app.get('/collage3', routes.collage3);
app.post('/saveCollage3', user.saveCollage3);
app.get('/displayCollage3', user.displayCollage3);

app.get('/collage4', routes.collage4);
app.post('/saveCollage4', user.saveCollage4);
app.get('/displayCollage4', user.displayCollage4);

<<<<<<< HEAD
=======
app.get('/collage5', routes.collage5);
app.post('/saveCollage5', user.saveCollage5);
app.get('/displayCollage5', user.displayCollage5);


>>>>>>> 4753e05b381646605495032ffaf0efd34f1cec9f
app.post('/saveDiary1', user.saveImageDiary1);
app.post('/saveDiary2', user.saveImageDiary2);
app.post('/saveDiary3', user.saveImageDiary3);
app.get('/getDiary1', user.getDiary1);
app.get('/getDiary2', user.getDiary2);
app.get('/getDiary3', user.getDiary3);
app.get('/next', user.nextPage);
app.get('/getDiaries/:id', user.getDiaries);
app.post('/listDiaries', user.listDiaries);


//
app.post('/login',auth.login);
app.post('/signUp',auth.signUp);
app.get('/signout',auth.signout);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

