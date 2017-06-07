/* global angular */

(function () {
    var app = angular.module('app', ['ngRoute']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                name: '',
                template: ''
            })
            .otherwise({redirectTo: '/'});
    })
})();