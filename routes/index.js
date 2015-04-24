
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'PixArt' });
};

exports.collage1 = function(req, res){
  res.render('collage');
};