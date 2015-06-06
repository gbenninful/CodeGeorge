'use strict';

/**
 * @ngdoc function
 * @name codeGeorgeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the codeGeorgeApp
 */
angular.module('codeGeorgeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
