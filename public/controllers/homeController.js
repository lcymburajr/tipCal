var tipApp = angular.module('tipApp', ['ngRoute']).

factory('myService', function() {
 var savedData = {}
 function set(data) {
   savedData = data;
 }
 function get() {
  return savedData;
 }

 return {
  set: set,
  get: get
 }

}).

config(function($routeProvider) {
  $routeProvider
  .when('/',
    {
      templateUrl: 'views/bill.html',
      controller: 'homeController'
    }
  )
  .when('/split-bill',
    {
      templateUrl: 'views/split_bill.html',
      controller: 'billController'
    }
  )
  .otherwise({redirectTo: '/'});
}).

controller('homeController', function($scope, myService){
  $scope.percents = [
      {tip: '20%', tipPercent: .2},
      {tip: '18%', tipPercent: .18},
      {tip: '15%', tipPercent: .15}
    ];
    $scope.selectTip = $scope.percents[0];

    $scope.billAmount = function () {
      return parseFloat($scope.amount);
    }

    $scope.peopleNumber = function () {
      return parseInt($scope.peopleAmount);
    }

    myService.set($scope.billAmount());

}).
controller('billController', function($scope, myService){
  $scope.percents = [
      {tip: '20%', tipPercent: .2},
      {tip: '18%', tipPercent: .18},
      {tip: '15%', tipPercent: .15}
    ];
    $scope.selectTip = $scope.percents[0];

    $scope.billAmount = function () {
      return parseFloat($scope.amount2);
    }

    $scope.peopleNumber = function () {
      return parseInt($scope.peopleAmount);
    }

    $scope.peopleAmount = 2;

    $scope.testface = myService.get();
});