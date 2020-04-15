var express = require('express');
var router = express.Router();

/* set up sql connection */
var mysql = require("mysql");
var connection = mysql.createConnection({
    host            : process.env.DATABASE_HOST,
    port            : process.env.MYSQL_PORT,
    user            : process.env.MYSQL_USER,
    password        : process.env.MYSQL_PASSWORD,
    database        : process.env.MYSQL_DATABASE
});

// /* throw an error if sql connect fails. it should fail a couple times in docker 
//  before successfully connecting. the container takes longer to boot up, essentially.
//  */
connection.connect(function(err){
	if(err){
		console.error("error connecting: " + err.stack);
		return process.exit(22); //consistently exit so the Docker container will restart until it connects to the sql db
	}
	console.log("connected as id " + connection.threadId);
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(process.env.DATABASE_HOST);
  // var q = 'SELECT * from characters';
	// var allegiance = 'select id, name from allegiance';
	// var ability = 'select id, type from ability';
	// var character = 'select id, first_name from characters';

	// /* query for characters, abilities, and allegiances then
	// pass the results into the page so the drop downs can be populated */
	// connection.query(allegiance, function(error, results, fields){
	// 	if(error) throw error;
	// 	allegiance = results;
	// 	//console.log(allegiance);
	// 	return;
	// });

	// connection.query(ability, function(error, results, fields){
	// 	if(error) throw error;
	// 	ability = results;
	// 	//console.log(ability);
	// 	return;
	// });

	// connection.query(character, function(error, results, fields){
	// 	if(error) throw error;
	// 	character = results;
	// 	//console.log(character);
	// 	return;
	// });


	// connection.query(q, function(error, results, fields){
	// 	if(error) throw error;
	// 	console.log("rendering home page . . .");
	// 	res.render('home', {
	// 		title: "Stormlight Archive DB",
	// 		results: results,
	// 		allegiance: allegiance,
	// 		ability: ability,
	// 		character: character
	// 	});
	// });
});

module.exports = router;
