/* global angular */

(function () {
    
    var app = angular.module('app');
    
    app.component('collector', {
        templateUrl: '../Collector.html',
        bindings: {
            passUp: '&'
        },
        controller: function ($scope, $http) {

            var $ctrl = this;

            $scope.handle = function(username, password) {
                $ctrl.passUp({
                    username: username,
                    password: password
                });
            }
        }
    });

})();