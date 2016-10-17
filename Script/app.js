var app = angular.module('myApp', []);

app.controller('dataController', function($scope, $http) {

   $http.get("http://www.hiddenchest.byethost7.com/check.php")
   .then(function (response) {$scope.names = response.data.records;});
   console.log($scope.names);
});
