var path = require('path');
var doctors = require('../controllers/doctors.js')//we can get functions from doctors

module.exports = function(app){

	app.get('/',function(req,res){
		doctors.create(req,res)
	})

	app.get('/getAllDocs', function(req, res){
		doctors.getAllDocs(req, res);
	})
	

	app.get('/doctors/:id',doctors.show_doctor);

	app.get('/getRelatedDocs/:id', function(req, res){
		doctors.getRelatedDocs(req, res);
	})

	
}