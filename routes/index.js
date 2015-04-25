
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'PixArt' });
};

exports.collage4 = function(req, res){
  res.render('collage4/collage4');
};