/* global angular */

(function () {
    var app = angular.module('app', ['ngRoute']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '../Home.html',
                controller: 'home'
            })
            .otherwise({redirectTo: '/'});
    })
})();