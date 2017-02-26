var myApp = angular.module("myApp",["ngRoute"]);

myApp.config(['$routeProvider', function($routeProvider){

  $routeProvider
  .when('/', {
    templateUrl: '/public/views/home.html'
  })
  .when('/rates', {
    templateUrl: '/public/views/rates.html'
  })
  .when('/calendar', {
    templateUrl: '/public/views/calendar.html'
  })
  .when('/location', {
    templateUrl: '/public/views/location.html'
  })
  .when('/owner_info', {
    templateUrl: '/public/views/owner_info.html'
  })
}]);
