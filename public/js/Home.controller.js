/* global angular */

(function () {
    var app = angular.module('app');

    app.controller('home', function($scope, $rootScope) {
        $scope.newPassword = function (input) {
            //alert(input);
        }
    });
})();