'use strict';

/**
 * @ngdoc function
 * @name projectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectApp
 */
angular.module('projectApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.teams = [
    {
      name: "Celtics",
      city: "Boton"
    },
    {
      name: "Bulls",
      city: "Chicago"
    },
    {
      name: "Knicks",
      city: "New York"
    }
    ];

    

      $http.get('http://www.w3schools.com/angular/customers.php').
        success(function(data, status, headers, config) {
          console.log(data)
          console.log()
          

          $scope.listData = data.records;
      }).
      error(function(data, status, headers, config) {
        console.log(data)
        console.log()
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
    

  });
