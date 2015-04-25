
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
app.use(express.session({ secret: 'keyboard cat', cookie: { maxAge: 300000 }}));
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
app.get('/users', user.list);
app.get('/collage4', routes.collage4);
app.post('/saveCollage4', user.saveCollage4);
app.get('/displayCollage4', user.displayCollage4);
app.post('/saveDiary1', user.saveImageDiary1);
app.post('/saveDiary2', user.saveImageDiary2);
app.post('/saveDiary3', user.saveImageDiary3);
app.get('/getDiary1', user.getDiary1);
app.get('/getDiary2', user.getDiary2);
app.get('/getDiary3', user.getDiary3);


//
app.post('/login',auth.login);
app.post('/signUp',auth.signUp);
app.get('/signout',auth.signout);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
