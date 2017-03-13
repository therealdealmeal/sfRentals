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
  };

  $scope.newTenant = {};
  data = $scope.newTenant;

  $scope.clearFields = function() {
    $scope.name = null;
  }

  $scope.sendEmail = function() {
    // $scope.currentTenant = {};
    data = ({name: $scope.newTenant.name, email: $scope.newTenant.email, comment: $scope.newTenant.comment});
    console.log(data);
    if (data) {
      $http.post('/email/send', data).then(function successCallback() {
        console.log("Success!!");
        // $scope.newTenant = ;
        return $location.url('/');
        }
      )}
        // .success(function(data, status, headers, config) {
        //   console.log("Success!!");
        // }).
        // error(function(data, status, headers, config) {
        //   console.log("Error!!");
        // });
    }
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
]);

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
