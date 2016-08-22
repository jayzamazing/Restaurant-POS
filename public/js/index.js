'use strict';
var angular = require('angular');
var ngRoute = require('angular-route');
var storeAuth = require('./storeauth');
var serverAuth = require('./serverauth');
var storeTable = require('./storetable');
var serverTable = require('./servertable');
//set module and inject dependencies
var viewModel = angular.module('viewModel', ['ngRoute', 'storeAuth',
'serverAuth', 'storeTable', 'serverTable'
]);
    //use routeprovider to create different routes in the application
    viewModel.config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider){
        $routeProvider
            //when / is requested
            .when('/', {
                //set as template
                templateUrl: 'login.html',
                //associate controller
                controller: 'AuthUser'
            }).when('/tables', {
              //set as template
              templateUrl: 'tables.html',
              //associate controller
              controller: 'TableData'
            }).when('/orders', {
              //set as template
              templateUrl: 'orders.html'
            })
            .otherwise({redirectTo:'/'});
            //rewrite url so it does not have #
            $locationProvider.html5Mode({enabled:true, requireBase:false});
    }]);
