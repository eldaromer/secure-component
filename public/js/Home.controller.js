/* global angular */

//IFFE, I use this to prevent global variable leaks.
(function () {
    var app = angular.module('app');

    //Add the home controller to the app
    app.controller('home', function($scope, $http) {

        //Get list of all passwords on creation of controller via the API
        $http.get('/api/passwords')
            .then(function(response) {
                $scope.passwords = response.data;
            });

        //Function that triggers when the data binding event fires to create a new password via the API
        $scope.newPassword = function (username, password) {
            $http.post('/api/passwords', {
                username: username,
                password: password
            }).then(function(response) {
                console.log(response.data);
            });
        };
    });
})();