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
                console.log(this);
                this.passUp();
            }
        }
    });
    
})();