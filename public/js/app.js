/* global angular */

(function () {
    var app = angular.module('app', ['ngRoute']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/main', {
                name: 'MainCtrl',
                template: '<main-ctrl></main-ctrl>'
            })
            .otherwise({redirectTo: '/main'});
    })
})();