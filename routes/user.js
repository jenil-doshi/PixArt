	var mysql = require('./mysql');
	var ejs = require("ejs");
	var express = require('express');  
	/*var mysqlUtilities = require('mysql-utilities');*/

	/*
	function getConnection(){
		var connection = mysql.createConnection({
		    host     : 'localhost',
		    user     : 'root',
		    password : 'root',
		    database : '280'
		});
		return connection;
	}
	*/
	exports.displayDiary = function(req,res){

		var diaryId = req.params.id;
		console.log("DiaryId is: "+diaryId);
		if(diaryId==1){
			res.render('diary1/index.ejs',{});
		}
		else if(diaryId==2){
			res.render('diary2/index.ejs',{});
		}else if(diaryId==3){
			res.render('diary3/index.ejs',{});
		}
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

		var query="insert into diary2 (image1,image2,image3,image4,image5,image6,image7,image8,text1,text2,text3,text4,text5,text6,text7,text8,text9,text10,text11,text12,text13,text14,text15,text16) values ('"+image1+"','"+image2+"','"+image3+"','"+image4+"','"+image5+"','"+image6+"','"+image7+"','"+image8+"','"+text1+"','"+text2+"','"+text3+"','"+text4+"','"+text5+"','"+text6+"','"+text7+"','"+text8+"','"+text9+"','"+text10+"','"+text11+"','"+text12+"','"+text13+"','"+text14+"','"+text15+"','"+text16+"')";
		
		
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

		var query="insert into 280.diary3 (image1,image2,image3,image4,text1,text2,text3,text4,text5,text6,text7) values ('"+image1+"','"+image2+"','"+image3+"','"+image4+"','"+text1+"','"+text2+"','"+text3+"','"+text4+"','"+text5+"','"+text6+"','"+text7+"')";
		
		
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
		
		var image1=req.body.image1;
		var image2=req.body.image2;
		var image3=req.body.image3;
		var image4=req.body.image4;
		var text1=req.body.text1;
		var text2=req.body.text2;
		var text3=req.body.text3;
		var text4=req.body.text4;
		var userId =1;
		var diaryId=1;
		//console.log(text1);
		var query = "select tid from diary1 where userId="+userId+" and diaryId="+diaryId;
		//var query = "UPDATE diary1 set text1='"+text1+"' ,text2='"+text2+"' ,text3='"+text3+"',text4='"+text4+"',image1='"+image1+"',image2='"+image2+"',image3='"+image3+"',image4='"+image4+"' where userId="+userId+" and diaryId="+diaryId;
		var connection=getConnection();
		
		connection.query(query, function(err, rows, fields) {

			console.log("inside db conn");
			if(err){
				console.log("ERROR: " + err.message);
				console.log("inside db conn error");
			}
			else {
				if( Object.keys(rows).length==0){
					var insertQuery = "insert into diary1 (userId,diaryId,image1,image2,image3,image4,text1,text2,text3,text4) values ('"+userId+"','"+diaryId+"','"+image1+"','"+image2+"','"+image3+"','"+image4+"','"+text1+"','"+text2+"','"+text3+"','"+text4+"')";
					connection.query(insertQuery,function(err,rows){
						if(err){
							console.log("ERROR: " + err.message);
							console.log("Error in inserting");
						}else{
							console.log("inserted successfully");
						}
						connection.end();

					});

				}
				else{

					var updateQuery = "UPDATE diary1 set text1='"+text1+"' ,text2='"+text2+"' ,text3='"+text3+"',text4='"+text4+"',image1='"+image1+"',image2='"+image2+"',image3='"+image3+"',image4='"+image4+"' where userId="+userId+" and diaryId="+diaryId;
					connection.query(updateQuery,function(err,rows){

						if(err){
							console.log("ERROR: " + err.message);
							console.log("Error in updating");
						}else{
							console.log("updated successfully");
						}
						connection.end();
					});
					
				}


			}


		});


		//connection.end();
	};



<<<<<<< HEAD
	
	mysql.dbcall(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			//console.log("image Saved Successfully");
			//console.log(results[0]);
			res.render('diary1/next.ejs', {results: results});
		}  
	},imgQuery);
};

exports.getDiary2 = function(req,res)
{
	
	var imgQuery="select * from diary2";
	

	
	mysql.dbcall(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			res.render('diary2/next.ejs', {results: results});
		}  
	},imgQuery);
};

exports.getDiary3 = function(req,res)
{
	
	var imgQuery="select * from diary3";
	

	
	mysql.dbcall(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			res.render('diary3/next.ejs', {results: results});
		}  
	},imgQuery);
};


//***************************************************

exports.saveCollage2 = function(req,res)
{
	var image1=req.body.image1;
	var image2=req.body.image2;
	var image3=req.body.image3;
	var image4=req.body.image4;
	var collageId=req.body.collageId;
	
	var imgQuery="insert into two_collage (userid, collageid,image1,image2) values('"+req.session.userId+"','"+collageId+"','"+image1+"', '"+image2+"')";
	
	console.log("query for image is: "+imgQuery);
	
	mysql.dbcall(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			console.log("images Saved Successfully");
			alert({"save":"Success"});
		}  
	},imgQuery);
};

exports.displayCollage2 = function(req,res)
{
	
	var imgQuery="select image1 from two_collage";
	
	console.log("query for image is: "+imgQuery);
	
	mysql.dbcall(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			console.log("image Saved Successfully");
			res.render('next.ejs', {results: results});
		}  
	},imgQuery);
};

exports.saveCollage3 = function(req,res)
{
	var image1=req.body.image1;
	var image2=req.body.image2;
	var image3=req.body.image3;
	var image4=req.body.image4;
	var collageId=req.body.collageId;
	
	var imgQuery="insert into three_collage (userid, collageid,image1,image2,image3) values('"+req.session.userId+"','"+collageId+"','"+image1+"', '"+image2+"', '"+image3+"')";
	
	console.log("query for image is: "+imgQuery);
	
	mysql.dbcall(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			console.log("images Saved Successfully");
			alert({"save":"Success"});
		}  
	},imgQuery);
};

exports.displayCollage3 = function(req,res)
{
	
	var imgQuery="select image1 from three_collage";
	
	console.log("query for image is: "+imgQuery);
	
	mysql.dbcall(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			console.log("image Saved Successfully");
			res.render('next.ejs', {results: results});
		}  
	},imgQuery);
};

exports.saveCollage4 = function(req,res)
{
	var image1=req.body.image1;
	var image2=req.body.image2;
	var image3=req.body.image3;
	var image4=req.body.image4;
	var collageId=req.body.collageId;
	
	var imgQuery="insert into four_collage (userid, collageid,image1,image2,image3,image4) values('"+req.session.userId+"','"+collageId+"','"+image1+"', '"+image2+"', '"+image3+"', '"+image4+"')";
	
	console.log("query for image is: "+imgQuery);
	
	mysql.dbcall(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			console.log("images Saved Successfully");
			alert({"save":"Success"});
		}  
	},imgQuery);
};

exports.displayCollage4 = function(req,res)
{
	
	var imgQuery="select image1 from four_collage";
	
	console.log("query for image is: "+imgQuery);
	
	mysql.dbcall(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			console.log("image Saved Successfully");
			res.render('next.ejs', {results: results});
		}  
	},imgQuery);

};



exports.saveCollage5 = function(req,res)
{
	var image1=req.body.image1;
	var image2=req.body.image2;
	var image3=req.body.image3;
	var image4=req.body.image4;
	var collageId=req.body.collageId;
	
	var imgQuery="insert into five_collage values('"+req.session.userId+"','"+collageId+"','"+image1+"', '"+image2+"', '"+image3+"', '"+image4+"')";
	
	console.log("query for image is: "+imgQuery);
	
	mysql.dbcall(function(err,results){
		if(err){
			throw err;
=======

	exports.getDiary1 = function(req,res)
	{
		
		var imgQuery="select * from diary1";
		

		
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
		
		var imgQuery="select * from diary2";
		

		
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
		
		var imgQuery="select * from 280.diary3";
		

		
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


	//***************************************************

	exports.saveCollage2 = function(req,res)
	{
		var image1=req.body.image1;
		var image2=req.body.image2;
		var image3=req.body.image3;
		var image4=req.body.image4;
		var collageId=req.body.collageId;
		
		var imgQuery="insert into two_collage (userid, collageid,image1,image2) values('"+req.session.userId+"','"+collageId+"','"+image1+"', '"+image2+"')";
		
		console.log("query for image is: "+imgQuery);
		
		mysql.dbcall(function(err,results){
			if(err){
				throw err;
			}
			else 
			{
				console.log("images Saved Successfully");
				alert({"save":"Success"});
			}  
		},imgQuery);
	};

	exports.displayCollage2 = function(req,res)
	{
		
		var imgQuery="select image1 from two_collage";
		
		console.log("query for image is: "+imgQuery);
		
		mysql.dbcall(function(err,results){
			if(err){
				throw err;
			}
			else 
			{
				console.log("image Saved Successfully");
				res.render('next.ejs', {results: results});
			}  
		},imgQuery);
	};

	exports.saveCollage3 = function(req,res)
	{
		var image1=req.body.image1;
		var image2=req.body.image2;
		var image3=req.body.image3;
		var image4=req.body.image4;
		var collageId=req.body.collageId;
		
		var imgQuery="insert into three_collage (userid, collageid,image1,image2,image3) values('"+req.session.userId+"','"+collageId+"','"+image1+"', '"+image2+"', '"+image3+"')";
		
		console.log("query for image is: "+imgQuery);
		
		mysql.dbcall(function(err,results){
			if(err){
				throw err;
			}
			else 
			{
				console.log("images Saved Successfully");
				alert({"save":"Success"});
			}  
		},imgQuery);
	};

	exports.displayCollage3 = function(req,res)
	{
		
		var imgQuery="select image1 from three_collage";
		
		console.log("query for image is: "+imgQuery);
		
		mysql.dbcall(function(err,results){
			if(err){
				throw err;
			}
			else 
			{
				console.log("image Saved Successfully");
				res.render('next.ejs', {results: results});
			}  
		},imgQuery);
	};

	exports.saveCollage4 = function(req,res)
	{
		var image1=req.body.image1;
		var image2=req.body.image2;
		var image3=req.body.image3;
		var image4=req.body.image4;
		var image5=req.body.image5;
		var image6=req.body.image6;
		var image7=req.body.image7;
		var image8=req.body.image8;
		var collageId=req.body.collageId;

		if(collageId == "4_1")
		{
			console.log("inside 4_1");
			var chkImgQuery="select * from four_collage where collageid='"+collageId+"' and userid='"+req.session.userId+"'";
			var insertImgQuery="insert into four_collage (userid, collageid,image1,image2,image3,image4) values('"+req.session.userId+"','"+collageId+"','"+image1+"', '"+image2+"', '"+image3+"', '"+image4+"')";
			var updateImgQuery="update four_collage set image1='"+image1+"', image2='"+image2+"', image3='"+image3+"', image4='"+image4+"' where userid='"+req.session.userId+"' and collageid='"+collageId+"'";
>>>>>>> aab08eccf9c0e1926d572418af311bb6d0aad1a3
		}
		else if(collageId == "4_2")	
		{
			console.log("inside 4_2");
			var chkImgQuery="select * from four_collage where collageid='"+collageId+"' and userid='"+req.session.userId+"'";
			var insertImgQuery="insert into four_collage (userid, collageid,image1,image2,image3,image4) values('"+req.session.userId+"','"+collageId+"','"+image5+"', '"+image6+"', '"+image7+"', '"+image8+"')";
			var updateImgQuery="update four_collage set image1='"+image5+"', image2='"+image6+"', image3='"+image7+"', image4='"+image8+"' where userid='"+req.session.userId+"' and collageid='"+collageId+"'";
		
		}
		//console.log("query for image is: "+imgQuery);
		
		mysql.dbcall(function(err,results){
			if(err){
				throw err;
			}
			else 
			{
				console.log("inside chsck query");
				if(results.length > 0)
				{
					mysql.dbcall(function(err,results){
						if(err){
							throw err;
						}
						else 
						{
							console.log("inside update query");
							console.log("images updated Successfully");
							res.render('second', {title:'PixArt'});
						}  
					},updateImgQuery);
				}
				else
				{
					mysql.dbcall(function(err,results){
						if(err){
							throw err;
						}
						else 
						{
							console.log("inside insert query");
							console.log("images Saved Successfully");
							res.render('second', {title:'PixArt'});
						}  
					},insertImgQuery);
				}
			}  
		},chkImgQuery);
	};

	exports.displayCollage4 = function(req,res)
	{
		
		var imgQuery="select * from four_collage where userid='"+req.session.userId+"'";
		
		console.log("query for image is: "+imgQuery);
		
		mysql.dbcall(function(err,results){
			if(err){
				throw err;
			}
			else 
			{
				console.log("image fetched Successfully");
				console.log("Result :" + JSON.stringify(results));
				console.log("Length :" + JSON.stringify(results.length));
				res.render('collage4/displayCollage4', {results: results});
			}  
		},imgQuery);
	};


	exports.nextPage = function(req,res){

		res.render('test.ejs',{});

	};

	exports.getDiaries = function(req,res){
		var userId = req.params.id;
		var query1="select tid from diary1 where userId="+userId;
		var query2 = "select id from diary2 where userId="+userId;
		var query3 = "select id from diary3 where userId="+userId;
		var finalobj = {};
		mysql.dbcall(function(err,results1){

			if(err){

				throw err;

			}else{
				if(Object.keys(results1).length>0){
					finalobj.diary1 = 1;
					console.log("Diary1 Final obj is: "+JSON.stringify(finalobj));

				}
			}

		},query1);
		mysql.dbcall(function(err,results2){

			if(err){

				throw err;

			}else{
				if(Object.keys(results2).length>0){
					finalobj.diary2 = 0;
					console.log("Final obj is: "+JSON.stringify(finalobj));
				}
			}

		},query2);

		mysql.dbcall(function(err,results3){

			if(err){

				throw err;

			}else{
				if(Object.keys(results3).length>0){
					finalobj.diary3 = 1;
					console.log("Diary3 Final obj is: "+JSON.stringify(finalobj));
				}
			}

		},query3);
		
		//res.render('next.ejs',{finalobj:JSON.stringify(finalobj)});

		//console.log("Async call: "+JSON.stringify(finalobj));

		mysql.dbcall(function(err,results4){

			if(err){

				throw err;

			}else{
				
				res.send('next.ejs',{finalobj:JSON.stringify(finalobj)});
			}
			

		},query1);
		
	};

	exports.listDiaries = function(req,res){

<<<<<<< HEAD
		var userId = req.session.userId;
var query1="select tid from diary1 where userId="+userId;
var query2 = "select id from diary2 where userId="+userId;
var query3 = "select id from diary3 where userId="+userId;
var finalobj = {};
var diary1 = {};
var diary2 = {};
var diary3 = {};
	mysql.dbcall(function(err,results1){

		if(err){

			throw err;

		}else{
			if(Object.keys(results1).length>0){
				diary1 = results1
				//console.log("Diary1 Final obj is: "+JSON.stringify(finalobj));
				//console.log("Results: "+results1);
				//console.log("String: "+JSON.stringify(results1));
				//console.log("JSON: "+JSON.parse(JSON.stringify(results1)));
				//complete....res.render('next.ejs',{finalobj:results1});
=======
		var userId = req.body.id;
		var query1="select tid from diary1 where userId="+userId;
		var query2 = "select id from diary2 where userId="+userId;
		var query3 = "select id from diary3 where userId="+userId;
		var finalobj = {};
		var diary1 = {};
		var diary2 = {};
		var diary3 = {};
		mysql.dbcall(function(err,results1){

			if(err){

				throw err;

			}else{
				if(Object.keys(results1).length>0){
					diary1 = results1
					//console.log("Diary1 Final obj is: "+JSON.stringify(finalobj));
					//console.log("Results: "+results1);
					//console.log("String: "+JSON.stringify(results1));
					//console.log("JSON: "+JSON.parse(JSON.stringify(results1)));
					//complete....res.render('next.ejs',{finalobj:results1});
				}
>>>>>>> aab08eccf9c0e1926d572418af311bb6d0aad1a3
			}

		},query1);
		mysql.dbcall(function(err,results2){

			if(err){

				throw err;

			}else{
				if(Object.keys(results2).length>0){
					diary2 = results2;
					//console.log("Final obj is: "+JSON.stringify(finalobj));
				}
			}

		},query2);
		mysql.dbcall(function(err,results3){

			if(err){

				throw err;

			}else{
				if(Object.keys(results3).length>0){
					diary3 = results3;
					//console.log("Diary3 Final obj is: "+JSON.stringify(finalobj));
				}
			}

		},query3);
		
		

		mysql.dbcall(function(err,results4){

			if(err){

				throw err;

			}else{
				console.log("Results 1:"+JSON.stringify(diary1));
				console.log("Results 2:"+JSON.stringify(diary2));
				console.log("Results 3:"+JSON.stringify(diary3));
				res.render('listDiary.ejs',{diary1:diary1,diary2:diary2,diary3:diary3});
			}
			

<<<<<<< HEAD
	},query1);
}

exports.viewMemories = function(req,res){

res.render("viewMemories.ejs",{userId:req.session.userId});
}
=======
		},query1);
	}
>>>>>>> aab08eccf9c0e1926d572418af311bb6d0aad1a3
