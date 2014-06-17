'use strict'

var app = angular.module('app',['app.filters','app.services','app.directives'])

app.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/inicio',{
            templateUrl:'rest/templates/inicio' ,
            controller:'inicioCtrl'
        })

        .when('/login',{
            templateUrl:'rest/templates/login',
            controller:'formCtrl'
        })

        .otherwise({
            redirectTo: '/inicio'
        })
}])
