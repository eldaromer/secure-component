/* global angular */

//IFFE, I use this to prevent global variable leaks.
(function () {
    var app = angular.module('app', ['ngRoute', 'ngMaterial', 'ngMessages', 'md.data.table']);

    //Set home route, template, and controller
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '../Home.html',
                controller: 'home'
            })
            .otherwise({redirectTo: '/'});
    })
})();