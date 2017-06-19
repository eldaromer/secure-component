/* global angular */

(function () {
    
    var app = angular.module('app');
    
    app.component('collector', {
        templateUrl: '../Collector.html',
        bindings: {
            passUp: '&'
        },
        controller: function ($scope, $rootScope) {

            this.$onInit = function () {
                this.passUp({password: "test"});
            };

            $scope.handle = function(username, password) {
                console.log(username, password);
            }
        }
    });

})();