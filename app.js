var myApp = angular.module("myApp",["ngRoute"]);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/', {
    templateUrl: '/public/views/home.html',
    access: true
  })
  .when('/rates', {
    templateUrl: '/public/views/rates.html',
    access: true
  })
  .when('/calendar', {
    templateUrl: '/public/views/calendar.html',
    access: true
  })
  .when('/location', {
    templateUrl: '/public/views/location.html',
    access: true
  })
  .when('/owner_info', {
    templateUrl: '/public/views/owner_info.html',
    access: true
  })
}]);

// myApp.factory('emailFactory', ["$http", function($http){
//   var factory = {};
//
//   factory.sendEmail = function($http) {
//     return $http.post('/email/send');
//   }
// }]);

myApp.controller('emailController', ['$scope', '$http', '$location', function($scope, $http, $location) {
  $scope.myDir = false;
  $scope.toggle = function() {
    $scope.myDir = !$scope.myDir;
    window.scrollTo(0, 2000);
  };

  $scope.newTenant = {};
  data = $scope.newTenant;

  $scope.clearFields = function() {
    $scope.newTenant = null;
  }

  $scope.sendEmail = function() {

    var successCallback = function() {
      if(data) {
        console.log("Success with Ang");
      }
    }

    var errorCallback = function() {
      if(!data) {
        console.log("Error with Ang");
      }
    }

    data = ({name: $scope.newTenant.name, email: $scope.newTenant.email, comment: $scope.newTenant.comment});
    console.log(data);
    if (data.name !== undefined && data.email !== undefined && data.comment !== undefined) {
      $http.post('/email/send', data).then(successCallback());
    } else {
      errorCallback();
    }
    return $location.url('/');
      // .success(function(tenantData){
      //   if(tenantData) {
      //     console.log("Success!!");
      //   }
      // })
      // .error(function(tenantData) {
      //   if(!tenantData) {
      //     console.log("Error!!");
      //   }
      // })
  }

  // $scope.emailProcess = function() {
  //   $scope.currentTenant = {
  //     name: $scope.tenant.name,
  //     email: $scope.tenant.email,
  //     comment: $scope.tenant.comment
  //   }
  //   emailFactory.sendEmail($scope.currentTenant, function() {
  //     console.log($scope.currentTenant);
  //   });
  // }
}]);

myApp.controller('currencyRates', function($scope) {
  $scope.STArateDay = 700;
  $scope.WINrateDay = 400;
  $scope.HOLrateDay = 800;
  $scope.STArateEnd = 800;
  $scope.WINrateEnd = 600;
  $scope.HOLrateEnd = 800;
  $scope.STArateWLy = 4000;
  $scope.WINrateWLy = 3150;
  $scope.STArateMLy = 12000;
  $scope.WINrateMLy = 12000;
})
