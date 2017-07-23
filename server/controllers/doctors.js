


console.log(' server doctor controller')

var mongoose = require('mongoose');


var Doctor = mongoose.model('Doctor');
// console.log(Doctor)

module.exports = {


	getAllDocs: function(req, res){

	function save_doctor(doctor)
    {
        doctor.save(function(err, user){
				// if(err){
				// 	res.json(err);
				// }
				// else {
				// 	res.json(doctor);
				// }
			})
    }

			var doctor1 = new Doctor({name:'Himanshi Khattar',age:"21",speciality:'Allergy and immunology', area: 'Paediatrics', review_score: '99', description:'Clinical Assistant Professor, Medicine - Pulmonary & Critical Care Medicine Clinical Assistant Professor, Pediatrics - Allergy and Clinical Immunology'});
			save_doctor(doctor1)
			var doctor2 = new Doctor({name:'Sam Smith',age:"27",speciality:'Pain Medicine ', area: 'Diabetes', review_score: '78', description: 'Awesome doc'});
			save_doctor(doctor2)
			var doctor3 = new Doctor({name:'Tony Jones',age:"24",speciality:'Sports Medicine ', area: 'Internal Medicine', review_score: '83', description: 'great doctor'});
			save_doctor(doctor3)
			var doctor4 = new Doctor({name:'Linda Johnson',age:"51",speciality:'Child Care ', area: 'Paediatrics', review_score: '81', description: 'Pediatric emergency medicine and urgent care'});
			save_doctor(doctor4)
			var doctor5 = new Doctor({name:'Nikki Sharma',age:"71",speciality:'Pulmonary Disease', area: 'Internal Medicine', review_score: '91', description: 'great doctor'});
			save_doctor(doctor5)
			var doctor6 = new Doctor({name:'Myra Williams',age:"61",speciality:'Dermatopathology ', area: 'Dermatology', review_score: '73', description: 'great doctor'});
			save_doctor(doctor6)
			var doctor7 = new Doctor({name:'Neil Kumar',age:"39",speciality:'Pulmonary Disease', area: 'Internal Medicine', review_score: '75', description: 'He completed a fellowship in pulmonary and critical care medicine in Denver, followed by postdoctoral research training at Stanford University. He focused on researching genetic and molecular mechanisms of pulmonary hypertension (PH) and idiopathic pulmonary fibrosis (IPF) and has devoted his clinical practice to diagnosis and management of these conditions. He is presently assistant professor of medicine and staff physician of the Stanford Adult PH Clinic where he trains fellows pursuing careers in PH and IPF. He is principal investigator of a research program with the ultimate goal of identifying new therapeutic targets to treat PH and IPF. '});
			save_doctor(doctor7)
			var doctor8 = new Doctor({name:'Fahim Abbasi',age:"49",speciality:'Prediabetes specialist', area: 'Diabetes', review_score: '54', 
				description:'Dr. Fahim Abbasi specializes in diagnosis and treatment of prediabetes and insulin resistance. Dr. Abbasi has a special interest in prevention of diabetes and cardiovascular disease through lifestyle modifications'});
			save_doctor(doctor8)
			var doctor9 = new Doctor({name:'Oliver Aalami',age:"49",speciality:'Vascular surgeon', area: 'Heart Failure', review_score: '93', 
				description:'Dr. Fahim Abbasi specializes in diagnosis and treatment of prediabetes and insulin resistance. Dr. Abbasi has a special interest in prevention of diabetes and cardiovascular disease through lifestyle modifications'});
			save_doctor(doctor9)
			var doctor10 = new Doctor({name:'Sumaira Aasi',age:"35",speciality:'Dermatologist', area: 'Dermatology', review_score: '88', 
				description:'Sumaira Z. Aasi, M.D., is a Professor of Dermatology and Director of Mohs and Dermatologic Surgery. Dr. Aasi completed a fellowship in Mohs micrographic surgery and cutaneous oncology at Yale University where she was on faculty and served as Associate Chief. Dr. Aasi helped train fellows in Mohs and Micrographic Surgery for over ten years. She has served on the Board of Directors of the American College of Mohs Surgery. Her clinical interests include management of high risk nonmelanoma skin cancers, Mohs histopathology, and reconstructive surgery.'});
			save_doctor(doctor10)
			var doctor11 = new Doctor({name:'Dipanjan Banerjee ',age:"33",speciality:'Cardiologist', area: 'Heart Failure', review_score: '89', 
				description:'Dipanjan Banerjee, MD, MS is a cardiologist trained in advanced heart failure and cardiac transplantation, with a primary interest in patients with end stage heart failure. In his clinical practice he cares for patients with heart failure, mechanical heart-assist devices, and heart transplantation both in the coronary care unit (CCU) and in the outpatient clinic. He also performs catheterization laboratory procedures and supervises the protocol based ramp echocardiography performed on our patients receiving left ventricular assist devices (LVADs). '});
			save_doctor(doctor11)
			var doctor12 = new Doctor({name:'Meghan Dickman',age:"29",speciality:'Dermatalogist', area: 'Dermatology', review_score: '47', 
				description:'Dr. Meghan Dickman joined Stanford Medicine in August 2016 as a Clinical Assistant Professor of Dermatology and Medical Director of Dermatology at Stanford ValleyCare. Dr. Dickman earned her Bachelor of Science, with distinction, from the University of Michigan in 2006. She received her medical degree from the University of California, San Francisco. During medical school, Dr. Dickman was inducted into the Alpha Omega Alpha Honor Medical Society. Dr. Dickman completed her dermatology residency at Stanford University in June 2016 and served as Chief Resident in her final year. She is board certified in dermatology by the American Board of Dermatology. Dr. Dickman’s professional focus is general medical dermatology, including acne, psoriasis, skin cancer, and dermatologic surgery. She also has a special interest in patient access and community outreach as well as medical education. '});
			save_doctor(doctor12)
			var doctor13 = new Doctor({name:'Golara Honari ',age:"49",speciality:'Dermatologist', area: 'Dermatology', review_score: '85', 
				description:'Golara Honari, MD, a specialist in contact dermatitis, joined the Stanford Dermatology faculty in September of 2015.  A native of Iran, Dr. Honari earned her medical degree from Iran’s University of Medical Sciences in 1999 and completed her residencies in Internal Medicine and Dermatology at the Cleveland Clinic in 2009.  '});
			save_doctor(doctor13)
			var doctor14 = new Doctor({name:'Justin Annes',age:"49",speciality:'Cancer geneticist', area: 'Cancer geneticist', review_score: '55', 
				description:'Dr. Justin Annes specializes in the treatment of hereditary endocrine disorders with particular focus on neuroendocrine-related conditions. He developed the Stanford Endocrine Genetics Clinic in 2012 which is part of the interdisciplinary Stanford Hypertension Center and Stanford Neuroendocrine Tumor Program.  He has medical practice has focused on hereditary endocrine disease since 2008.Dr. Fahim Abbasi specializes in diagnosis and treatment of prediabetes and insulin resistance.'});
			save_doctor(doctor14)
			var doctor15 = new Doctor({name:'Uri Ladabaum',age:"49",speciality:'Cancer geneticist', area: 'Cancer geneticist', review_score: '65', 
				description:'Professor of Medicine (Gastroenterology and Hepatology) at the Stanford University School of Medicine'});
			save_doctor(doctor15)
			var doctor16 = new Doctor({name:'Gabriel Garcia',age:"49",speciality:'Hepatologist', area: 'Alcohol Hepatitis', review_score: '87', 
				description:'The William and Dorothy Kaye University Fellow in Undergraduate Education and Professor of Medicine (Gastroenterology and Hepatology) at the Stanford University Medical Center'});
			save_doctor(doctor16)
			var doctor17 = new Doctor({name:'Aparna Goel',age:"49",speciality:'Hepatologist', area: 'Alcohol Hepatitis', review_score: '84', 
				description:'She has a particular clinical interest in the management of patients with autoimmune liver disease including autoimmune hepatitis, primary biliary cholangitis, primary sclerosing choalngitis, and other related liver diseases. She also has a clinical research interest in complications of end-stage liver disease. '});
			save_doctor(doctor17)

			// res.json(doctor)

			// doctor.save(function(err, user){
			// 	if(err){
			// 		res.json(err);
			// 	}
			// 	else {
			// 		res.json(doctor);
			// 	}
			// })
			
			Doctor.find({}, function(err, docs){
				console.log('docs',docs)
				if(err){
					console.log("err in the get alldocs");
				}
				else{
					res.json(docs);
				}
			})
		},


		show_doctor: function(req,res){
		Doctor.findOne({_id:req.params.id},function(err,result){
			res.json(result);
		})
		

	},
// 	create: function(req,res)
// 	{
// 		console.log('inside  create server controller')
// 		// console.log('POST DATA',req.body);

		
// 			var doctor = new Doctor({first_name:'Himanshi',last_name:'Khattar',speciality:'Allergy and immunology', area: 'Paediatrics', review_score: '5'});
			
// 			doctor.save(function(err, user){
// 				if(err){
// 					res.json(err);
// 				}
// 				else {
// 					res.json(doctor);
// 				}
// 			})
			

	
		


// }


getRelatedDocs: function(req, res){

	Doctor.findOne({_id:req.params.id},function(err,result)
		{
			console.log('doctor', result)
			if (result)
			{
				// ( { $and: [ { price: { $ne: 1.99 } }, { price: { $exists: true } } ] } )
				// { price: { $not: { $gt: 1.99 } } }
				// Doctor.find({$and: [ {area: result.area}, { $not: {_id:req.params.id}}]}, function(err, related_docs){

				Doctor.find({ $and: [{area: result.area}, {_id: {$ne: req.params.id}}]}, function(err, related_docs){
				console.log('related_docs',related_docs)
				if(err){
					console.log("err in the get alldocs");
				}
				else{
					res.json(related_docs);
				}
			})

			}
			
		})
	

	// console.log('req.params.id',req.params.id)
			
		
		},



}




