var mysql = require('./mysql');
var ejs = require("ejs");
var express = require('express');

exports.login = function(req,res){

var username = req.param("username");
var password = req.param("password");
console.log(username);
console.log(password);

var query = "select * from pixart.users where email="+'email'+" and password="+'password';
mysql.dbcall(function(err,results){

	if(err){
			throw err;
		}
		else 
		{
			console.log("Login Successfully");
			res.send({"fetch":"Success"});
		}  
	},query);

};


exports.signUp = function(req,res){


var username = req.param("username");
var password = req.param("password");
var email = req.param("email");
var query = "insert into pixart.users (username,password,email) values ('"+username+"','"+password+"','"+email+"')";
	mysql.dbcall(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			console.log("Data Saved Successfully");
			res.send({"save":"Success"});
		}  
	},query);

};