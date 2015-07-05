'use strict';

/**
 * @ngdoc overview
 * @name codeGeorgeApp
 * @description
 * # codeGeorgeApp
 *
 * Main module of the application.
 */
angular
  .module('codeGeorgeApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
     /* .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })*/
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

  });

