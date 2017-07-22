app.factory('doctor_factory',function($http){
        console.log('start doctor_factory');

     var factory = {};

       factory.getAllDocs = function(callback)
       {
          $http.get('/getAllDocs').then(function(data)
        {
          console.log('data',data.data);
          docs = data.data;
          callback(docs);
        })
      }

      factory.get_doctor_by_id = function(id,callback)
      {
        console.log('inside get doctor by id factory')
        $http.get('/doctors/' + id).then(function(returned_data)
        {
          callback(returned_data.data);
            
        })
      }

      factory.getRelatedDocs = function(id,callback)
       {
          $http.get('/getRelatedDocs/' + id).then(function(data)
        {
          console.log('data',data.data);
          related_docs = data.data;
          callback(related_docs);
        })
      }

       

       
        return factory;
    })

