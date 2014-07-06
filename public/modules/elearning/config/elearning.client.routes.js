'use strict';

//Setting up route
angular.module('elearning').config(['$stateProvider',
    function($stateProvider) {
        // Elearning state routing
        $stateProvider.
        state('learnarticle', {
            url: '/learnarticle/:articleId',
            templateUrl: 'modules/elearning/views/learnarticle.client.view.html'
        }).
        state('learnroute', {
            url: '/learn',
            templateUrl: 'modules/elearning/views/learnroute.client.view.html'
        });
    }
]);