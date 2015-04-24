var ejs= require('ejs');
var mysql = require('mysql');

function getConnection(){
	var connection = mysql.createConnection({
	    host     : 'localhost',
	    user     : 'root',
	    password : 'root',
	    database : 'pixart'
	});
	return connection;
}


exports.dbcall = function(callback,sqlQuery){
	
	//console.log("\nSQL Query::"+sqlQuery);
	
	var connection=getConnection();
	
	connection.query(sqlQuery, function(err, rows, fields) {
		console.log("inside db conn");
		if(err){
			console.log("ERROR: " + err.message);
			console.log("inside db conn error");
		}
		else 
		{	// return err or result
			console.log("DB Results:"+rows);
			console.log("inside db conn success");
			callback(err, rows);
		}
	});
	console.log("\nConnection closed..");
	connection.end();
}	

