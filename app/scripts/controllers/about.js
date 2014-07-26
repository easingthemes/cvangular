'use strict';

/**
 * @ngdoc function
 * @name cvangularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cvangularApp
 */
angular.module('cvangularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
