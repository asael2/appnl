'use strict';

angular.module('users').controller('MyArticlesController', ['$scope', 'Articles', 'Users',
    function($scope, Articles, Users, User) {

        $scope.addArt2me = function(req, res) {
            var myArticle = new Articles($scope.article);

            $scope.myUser.userArticles.push(myArticle._id);
            console.log("Mis articulos: " + $scope.myUser.userArticles.length);

            $scope.myUser.$update(function(response) {
                console.log("Actualize!! con : " + $scope.myUser.userArticles);
            }, function(errorResponse) {
                console.log("updatError: " + myArticle._id + errorResponse.data);
                $scope.error = errorResponse;
            });
        };
    }
]);