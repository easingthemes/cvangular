'use strict';

/**
 * @ngdoc function
 * @name cvangularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cvangularApp
 */
angular.module('cvangularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
