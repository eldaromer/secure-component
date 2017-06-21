/* global angular */

//IFFE, I use this to prevent global variable leaks.
(function () {
    
    var app = angular.module('app');

    //Add a validation directive to ensure the password has numeric digits in it
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

    //Add a validation directive to ensure the password has alphabetic characters in it
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

    //Add a validation directive to ensure the password does not contain the username
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