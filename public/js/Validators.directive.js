/* global angular */

(function () {
    
    var app = angular.module('app');

    app.directive('digits', function() {
        return {
            require: 'ngModel',
            link: function(scope, elem, attr, ngModel) {
                ngModel.$parsers.unshift(function (value) {

                    var temp = true;

                    if (ngModel.$viewValue) {
                        if (!/\d/g.test(ngModel.$viewValue)) {
                            temp = false;
                        } else {
                            temp = true;
                        }
                    }
                    ngModel.$setValidity('digits', temp);

                    return value;
                });
            }
        };
    });
    
    app.directive('alpha', function () {
        return {
            require: 'ngModel',
            link: function(scope, elem, attr, ngModel) {
                ngModel.$parsers.unshift(function (value) {

                    var temp = true;
                    if (ngModel.$viewValue) {
                        if(!/[A-Za-z]/g.test(ngModel.$viewValue)) {
                            temp = false;
                        } else {
                            temp = true;
                        }
                    }
                    ngModel.$setValidity('alpha', temp);

                    return value;
                });
            }
        };
    });

    app.directive('user', function () {
        return {
            require: 'ngModel',
            link: function(scope, elem, attr, ngModel) {
                ngModel.$parsers.unshift(function (value) {

                    var temp = true;



                    if (scope.passwordForm.password.$viewValue && scope.passwordForm.username.$viewValue) {
                        if((scope.passwordForm.password.$viewValue + "").includes(scope.passwordForm.username.$viewValue + "")) {
                            temp = false;
                        } else {
                            temp = true;
                        }
                    }
                    ngModel.$setValidity('user', temp);

                    return value;
                });
            }
        };
    });
    
})();