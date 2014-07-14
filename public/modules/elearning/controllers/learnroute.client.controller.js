'use strict';

angular.module('articles').controller('LearnrouteController', ['$scope', '$stateParams', '$location', 'Authentication', 'Articles', 'Users',
    function($scope, $stateParams, $location, Authentication, Articles, Users) {

        $scope.authentication = Authentication;
        $scope.user = Authentication.user;
        $scope.myUser = new Users($scope.user);
        $scope.misArticulos = {};

        var myArticles = $scope.user.userArticles;

        var articlesLength = myArticles.length;

        $scope.find = function() {
            for (var i = 0; i < articlesLength; i++) {
                // console.log(myArticles[i]);
                $scope.misArticulos[i] = Articles.get({
                    articleId: myArticles[i]
                });
                // console.log($scope.misArticulos[i]);
            }

        }

    }

]);