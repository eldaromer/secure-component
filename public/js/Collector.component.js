/* global angular */

//IFFE, I use this to prevent global variable leaks.
(function () {
    
    var app = angular.module('app');

    //Create the password collector component
    app.component('collector', {
        templateUrl: '../Collector.html',
        //Binds data upward using an event function
        bindings: {
            passUp: '&'
        },
        controller: function ($scope, $http) {

            var $ctrl = this;

            //Function is called when form is submitted
            $scope.handle = function(username, password) {
                $ctrl.passUp({
                    username: username,
                    password: password
                });
            }
        }
    });

})();