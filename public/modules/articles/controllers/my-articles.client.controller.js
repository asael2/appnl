'use strict';

angular.module('users').controller('MyArticlesController', ['$scope', 'Articles', 'Users',
    function($scope, Articles, Users, User) {

        $scope.addArt2me = function(elArticulo) {
            // console.log(elArticulo);
            var myArticle = elArticulo;
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

        $scope.remArt2me = function(elArticulo) {
            var myArticle = elArticulo;
            var index = $scope.myUser.userArticles.indexOf(myArticle._id);
            if (index > -1) {
                $scope.myUser.userArticles.splice(index, 1);
                $scope.myUser.$update(function(response) {


                    $scope.reload();
                    console.log("Eliminando a: " + $scope.misArticulos);
                    // $scope.$apply();

                }, function(errorResponse) {
                    console.log("updatError: " + myArticle._id + errorResponse.data);
                    $scope.error = errorResponse;
                });
            };
        };
    }
]);