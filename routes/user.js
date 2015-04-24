var mysql = require('./mysql');
var ejs = require("ejs");
var express = require('express');

exports.list = function(req, res){
  res.send("respond with a resource");
};


exports.saveImageDiary2 = function(req,res)
{
	var image1=req.body.image1;
	var image2=req.body.image2;
	var image3=req.body.image3;
	var image4=req.body.image4;
	var image5=req.body.image5;
	var image6=req.body.image6;
	var image7=req.body.image7;
	var image8=req.body.image8;

	var text1=req.body.text1;
	var text2=req.body.text2;
	var text3=req.body.text3;
	var text4=req.body.text4;
	var text5=req.body.text5;
	var text6=req.body.text6;
	var text7=req.body.text7;
	var text8=req.body.text8;
	var text9=req.body.text9;
	var text10=req.body.text10;
	var text11=req.body.text11;
	var text12=req.body.text12;
	var text13=req.body.text13;
	var text14=req.body.text14;
	var text15=req.body.text15;
	var text16=req.body.text16;

	var query="insert into test.diary2 (image1,image2,image3,image4,image5,image6,image7,image8,text1,text2,text3,text4,text5,text6,text7,text8,text9,text10,text11,text12,text13,text14,text15,text16) values ('"+image1+"','"+image2+"','"+image3+"','"+image4+"','"+image5+"','"+image6+"','"+image7+"','"+image8+"','"+text1+"','"+text2+"','"+text3+"','"+text4+"','"+text5+"','"+text6+"','"+text7+"','"+text8+"','"+text9+"','"+text10+"','"+text11+"','"+text12+"','"+text13+"','"+text14+"','"+text15+"','"+text16+"')";
	
	
console.log("query for text1 is: "+text1);
console.log("query for text2 is: "+text2);
console.log("query for text1 is: "+text3);
console.log("query for text2 is: "+text4);
console.log("query for text1 is: "+text5);
console.log("query for text2 is: "+text6);
console.log("query for text1 is: "+text7);
console.log("query for text2 is: "+text8);
console.log("query for text2 is: "+text9);
console.log("query for text2 is: "+text10);
console.log("query for text2 is: "+text11);
console.log("query for text2 is: "+text12);
console.log("query for text2 is: "+text13);
console.log("query for text2 is: "+text14);
console.log("query for text2 is: "+text15);
console.log("query for text2 is: "+text16);
	
	mysql.dbcall(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			console.log("image Saved Successfully");
			res.send({"save":"Success"});
		}  
	},query);
};

exports.saveImageDiary3 = function(req,res)
{
	
	var image1=req.body.image1;
	var image2=req.body.image2;
	var image3=req.body.image3;
	var image4=req.body.image4;
	var text1=req.body.text1;
	var text2=req.body.text2;
	var text3=req.body.text3;
	var text4=req.body.text4;
	var text5=req.body.text5;
	var text6=req.body.text6;
	var text7=req.body.text7;

	var query="insert into test.diary3 (image1,image2,image3,image4,text1,text2,text3,text4,text5,text6,text7) values ('"+image1+"','"+image2+"','"+image3+"','"+image4+"','"+text1+"','"+text2+"','"+text3+"','"+text4+"','"+text5+"','"+text6+"','"+text7+"')";
	
	
console.log("query for text1 is: "+text1);
console.log("query for text2 is: "+text2);
console.log("query for text1 is: "+text3);
console.log("query for text2 is: "+text4);
console.log("query for text1 is: "+text5);
console.log("query for text2 is: "+text6);
console.log("query for text1 is: "+text7);
	
	mysql.dbcall(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			console.log("image Saved Successfully");
			res.send({"save":"Success"});
		}  
	},query);
};

exports.saveImageDiary1 = function(req,res)
{
	//console.log(req);
	//var img=req.param("img");

	var image1=req.body.image1;
	var image2=req.body.image2;
	var image3=req.body.image3;
	var image4=req.body.image4;
	var text1=req.body.text1;
	var text2=req.body.text2;
	var text3=req.body.text3;
	var text4=req.body.text4;
	var text5=req.body.text5;
	var text6=req.body.text6;
	var text7=req.body.text7;
	var text8=req.body.text8;
	var query="insert into test.diary1 (image1,image2,image3,image4,text1,text2,text3,text4,text5,text6,text7,text8) values ('"+image1+"','"+image2+"','"+image3+"','"+image4+"','"+text1+"','"+text2+"','"+text3+"','"+text4+"','"+text5+"','"+text6+"','"+text7+"','"+text8+"')";
	
	
console.log("query for text1 is: "+text1);
console.log("query for text2 is: "+text2);
console.log("query for text1 is: "+text3);
console.log("query for text2 is: "+text4);
console.log("query for text1 is: "+text5);
console.log("query for text2 is: "+text6);
console.log("query for text1 is: "+text7);
console.log("query for text2 is: "+text8);
	
	mysql.dbcall(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			console.log("image Saved Successfully");
			res.send({"save":"Success"});
		}  
	},query);
};

exports.getDiary1 = function(req,res)
{
	
	var imgQuery="select * from test.diary1";
	

	
	mysql.dbcall(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			//console.log("image Saved Successfully");
			//console.log(results[0]);
			res.render('next.ejs', {results: results});
		}  
	},imgQuery);
};

exports.getDiary2 = function(req,res)
{
	
	var imgQuery="select * from test.diary2";
	

	
	mysql.dbcall(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			res.render('next.ejs', {results: results});
		}  
	},imgQuery);
};

exports.getDiary3 = function(req,res)
{
	
	var imgQuery="select * from test.diary3";
	

	
	mysql.dbcall(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			res.render('next.ejs', {results: results});
		}  
	},imgQuery);
};