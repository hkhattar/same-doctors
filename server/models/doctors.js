console.log('doctor.model')

var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var DoctorSchema = new mongoose.Schema({
	
	name:{type: String},
	age:{type: Number},
	speciality: {type: String},
	area: {type: String},
	review_score: {type: Number},
	description: {type: String},
	
});



mongoose.model('Doctor',DoctorSchema);


