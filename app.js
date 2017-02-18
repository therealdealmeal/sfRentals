var myApp = angular.module('myApp',['ngRoute'])

myApp.config(['$routeProvider', function($routeProvider, $locationProvider){

  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/', {
      templateUrl: 'public/templates/home.html'
    })
    .when('/rates', {
      templateUrl: 'public/templates/rates.html'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
