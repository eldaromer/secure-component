/* global angular */

angular.module('app', ['$scope'])
    .component('main', {
        templateUrl: 'Main.html',
        bindings: {
            password: '='
        },
        controller: function ($scope) {
            console.log($scope.user.password);
        }
    });