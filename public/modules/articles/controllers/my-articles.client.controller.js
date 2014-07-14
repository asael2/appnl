'use strict';

angular.module('users').controller('MyArticlesController', ['$scope', 'Articles', 'Users',
    function($scope, Articles, Users, User) {

        $scope.addArt2me = function(req, res) {

            var myArticle = new Articles($scope.article);

            if ($scope.myUser.userArticles.indexOf(myArticle._id) > -1) {
                alert("Ya en array");
            } else {

                $scope.myUser.userArticles.unshift(myArticle._id);
                // console.log($scope.myUser.userArticles);
                // console.log("Mis articulos: " + $scope.myUser.userArticles.length);
                $scope.myUser.$update(function(response) {
                    console.log("Actualize!! con : " + $scope.myUser.userArticles);
                }, function(errorResponse) {
                    console.log("updatError: " + myArticle._id + errorResponse.data);
                    $scope.error = errorResponse;
                });

            }
        };


        $scope.remArt2me = function(req, res) {
            var myArticle = new Articles($scope.article);
            $scope.myUser.userArticles.pop(myArticle._id);
            $scope.myUser.$update(function(response) {
                console.log("Actualize!! con : " + $scope.myUser.userArticles);
            }, function(errorResponse) {
                console.log("updatError: " + myArticle._id + errorResponse.data);
                $scope.error = errorResponse;
            });

            $scope.misArticulos = $scope.myUser.userArticles
            // myArticle.remove()
            // console.log($scope);
        };
    }
]);
// $scope.$apply(function() {

//             });