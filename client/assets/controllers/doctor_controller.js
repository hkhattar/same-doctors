
app.controller('doctor_controller', function($scope, $routeParams, $location, doctor_factory)
{

		doctor_factory.getAllDocs(function(data)
		{
			$scope.doctors = data;
			// console.log($scope.appts);
			//to populate the table
		})

		$scope.get_doctor_by_id = function()
	      {
	        console.log('inside get_doctor_by_id')
	        doctor_factory.get_doctor_by_id($routeParams.id,function(data)

	        {
	        	console.log('data',data)
	          $scope.doctor = data;
	        })
	      }

      $scope.get_doctor_by_id();


      doctor_factory.getRelatedDocs($routeParams.id,function(data)
		{
			$scope.related_doctors = data;
			// console.log($scope.appts);
			//to populate the table
		})
    
      
    })
      



