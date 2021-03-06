/**
 * Created by clay on 26/07/14.
 */

'use strict';

tabataApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'view/home.html',
                controller: 'exerciseCtrl'
            }).
            when('/settings', {
                templateUrl: 'view/settings.html',
                controller: 'settingsCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);