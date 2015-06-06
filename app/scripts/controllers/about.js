'use strict';

/**
 * @ngdoc function
 * @name codeGeorgeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the codeGeorgeApp
 */
angular.module('codeGeorgeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
