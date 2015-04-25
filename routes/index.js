
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'PixArt' });
};

exports.collage2 = function(req, res){
  res.render('collage2/collage2');
};

exports.collage3 = function(req, res){
  res.render('collage3/collage3');
};

exports.collage4 = function(req, res){
  res.render('collage4/collage4');
};

exports.collage5 = function(req, res){
  res.render('collage5/collage5');
};