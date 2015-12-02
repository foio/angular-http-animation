'use strict';

/* App Module */
var testApp = angular.module('TestApp', [
  'ngRoute',
  'MoboCarnivalControllers'
]);

testApp.config(['$routeProvider','$httpProvider', function($routeProvider,$httpProvider) {
    $routeProvider.
      when('/tab1', {
        templateUrl: 'sections/tab1.html',
        controller: 'Tab1Ctrl'
      }).
      when('/tab2', {
        templateUrl: 'sections/tab2.html',
        controller: 'Tab2Ctrl'
      }).
      when('/tab3', {
        templateUrl: 'sections/tab3.html',
        controller: 'Tab3Ctrl'
      }).
      otherwise({
        redirectTo: '/tab1'
      });

    //trigger animation when http request is still in progress
    $httpProvider.interceptors.push(['$q','$rootScope',function($q,$rootScope){
        var numLoadings = 0;
        return {
            request : function(config){
                $rootScope.XHRLoading = true;
                numLoadings++;
                return config;
            },
            requestError : function(config){
                $rootScope.XHRLoading = false;
                numLoadings = 0;
                return config;
            },
            response : function(config){
                if((--numLoadings) === 0){
                    $rootScope.XHRLoading = false;
                }
                return config;
            },
            responseError : function(config){
                $rootScope.XHRLoading = false;
                numLoadings = 0;
                return config;
            },
        }
    }]);
       

}]);