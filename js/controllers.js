'use strict';
/* Controllers */
var moboCarnivalControllers = angular.module('MoboCarnivalControllers', []);
moboCarnivalControllers.controller('Tab1Ctrl', ['$scope', '$http',function($scope, $http) {
	//replace your url here
    $http.get('../data/data.json');
}]);

moboCarnivalControllers.controller('Tab2Ctrl', ['$scope', '$http',function($scope, $http) {
	//replace your url here
    $http.get('../data/data.json');
}]);


moboCarnivalControllers.controller('Tab3Ctrl', ['$scope', '$http',function($scope, $http) {
	//when 404 happens
	//replace your url here
    $http.get('null');
}]);
