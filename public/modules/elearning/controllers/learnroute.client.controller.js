'use strict';

angular.module('elearning').controller('LearnrouteController', ['$scope', '$stateParams', '$location', 'Authentication', 'Articles',
    function($scope, $stateParams, $location, Authentication, Articles) {
        $scope.authentication = Authentication;

        // listar todos los articulos
        $scope.find = function() {
            $scope.articles = Articles.query();
            
        $scope.misArticulos = user.userArticles;
            console.log("mis articulos " + user.userArticles);
            // console.log("logueando en leanroute controller: " + user.userArticles);
        };

    }
]);