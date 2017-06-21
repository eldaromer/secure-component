/* global angular */

(function () {
    var app = angular.module('app', ['ngRoute', 'ngMaterial', 'ngMessages', 'md.data.table']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '../Home.html',
                controller: 'home'
            })
            .otherwise({redirectTo: '/'});
    })
})();