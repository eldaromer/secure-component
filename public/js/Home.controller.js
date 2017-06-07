/* global angular */

(function () {
    var app = angular.module('app');

    app.controller('home', function($scope, $rootScope) {
        $scope.test = "world";
    });
})();