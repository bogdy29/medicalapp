'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.report',
  'commonServices',
  'nvd3',
  'angularMoment',
  'ngCookies',
  'pascalprecht.translate'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/report'});
}]);

app.controller('appCtrl', function ($scope, $translate) {
  $scope.changeLanguage = function (key) {
    $translate.use(key);
  };
});

app.config([
    '$translateProvider', function($translateProvider) {
		
	$translateProvider.useStaticFilesLoader({
        prefix: 'translations/locale-',
        suffix: '.json'
      });
	  
      //$translateProvider.useCookieStorage();
      $translateProvider.preferredLanguage('en');
	  
    }
  ]);
