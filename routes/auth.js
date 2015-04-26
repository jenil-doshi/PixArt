	var mysql = require('./mysql');
	var ejs = require("ejs");
	var express = require('express');

	exports.login = function(req,res){

	var email = req.param("email");
	var password = req.param("password");
	console.log("Email:"+email);
	console.log("Password:"+password);


	var query = "select * from user_info where email="+'email'+" and password="+'password';

	mysql.dbcall(function(err,results){

		if(err){
<<<<<<< HEAD
			throw err;
		}
		else 
		{
			console.log("Data Saved Successfully");

			res.render();

			res.render('second', {title:'PixArt'});

		}  
	},query);

};


exports.signout = function(req, res){
	
    req.session.destroy(function(err) {
           
           if(!err){
                res.render('index', { title: 'PixArt' }, function(err, result) {
			        // render on success
			        if (!err) {
			        	console.log("Session Destroyed");
			            res.end(result);
			        }
			        // render or error
			        else {
			            res.end('An error occurred');
			            console.log(err);
			        }
    			});
            }else{
                
                res.send('error');
                res.end();
            }
        });
}
=======
				throw err;
			}
			else 
			{
				if(results.length > 0)
					{
						req.session.email = results[0].email;
						req.session.userId = results[0].userId;
						console.log("Session Email ID: " + req.session.email);
						console.log("Session UserId ID: " + req.session.userId);
						console.log("Login Successfully");
						res.render('second', {title:'PixArt'});
						
					}  
					else
					{
						alert("Error in Log in");
					}	
			}  
		},query);

	};


	exports.signUp = function(req,res){


	var name = req.param("name");
	var password = req.param("password");
	var email = req.param("email");

	var query = "insert into user_info (name,password,email) values ('"+name+"','"+password+"','"+email+"')";


		mysql.dbcall(function(err,results){
			if(err){
				throw err;
			}
			else 
			{
				console.log("Data Saved Successfully");
				res.render('second', {title:'PixArt'});
			}  
		},query);

	};


	exports.signout = function(req, res){
		
	    req.session.destroy(function(err) {
	           
	           if(!err){
	                res.render('index', { title: 'PixArt' }, function(err, result) {
				        // render on success
				        if (!err) {
				        	console.log("Session Destroyed");
				            res.end(result);
				        }
				        // render or error
				        else {
				            res.end('An error occurred');
				            console.log(err);
				        }
	    			});
	            }else{
	                
	                res.send('error');
	                res.end();
	            }
	        });
	}
>>>>>>> aab08eccf9c0e1926d572418af311bb6d0aad1a3
