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
                console.log($scope);
                this.passUp({password: "test"});
            };

            $scope.validate = function () {
                if (!/\d/g.test($scope.pass.password)) {
                    this.passwordForm.password.$error.digits = true;
                } else {
                    this.passwordForm.password.$error.digits = false;
                }
                
                if(!/[A-Za-z]/g.test($scope.pass.password)) {
                    this.passwordForm.password.$error.alpha = true;
                } else {
                    this.passwordForm.password.$error.alpha = false;
                }

                if(($scope.pass.password + "").includes($scope.pass.username + "")) {
                    this.passwordForm.password.$error.user = true;
                    console.log(this);
                } else {
                    this.passwordForm.password.$error.user = false;
                }

            };
        }
    });

})();