var app = angular.module('app', ['ngRoute','ngCookies']);



app.config(function ($routeProvider) {
// Routes to load your new and edit pages with new and edit controllers attached to them!

$routeProvider
       
        .when('/',{
          templateUrl: 'partials/doctors_listing.html',
          controller: 'doctor_controller'

        })

         .when('/doctors/:id',{
          templateUrl: 'partials/doctor.html',
          controller: 'doctor_controller'
        })

});