/* global angular */

(function () {
    var app = angular.module('app');

    app.controller('home', function($scope, $http) {

        $http.get('/api/passwords')
            .then(function(response) {
                $scope.passwords = response.data;
            });

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