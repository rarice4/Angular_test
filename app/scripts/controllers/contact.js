'use strict';

/**
 * @ngdoc function
 * @name projectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the projectApp
 */
angular.module('projectApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.contacts = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });