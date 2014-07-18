'use strict';

angular.module('users').controller('MyArticlesController', ['$scope', 'Articles', 'Users', '$location',
    function($scope, Articles, Users, User, $location) {

        console.log("Mis Articulos: " + $scope.misArticulos);

        $scope.addArt2me = function(elArticulo) {
            var myArticle = elArticulo;
        if ($scope.myUser.userArticles.indexOf(myArticle._id) > -1) {
                alert("Ya en array");
            } else {
            $scope.myUser.userArticles.unshift(myArticle._id);
            $scope.myUser.$update(function(response) {
                console.log("Actualize!! con : " + $scope.myUser.userArticles);
                    // $location.path("/#!/learn");
                }, function(errorResponse) {
                    console.log("updatError: " + myArticle._id + errorResponse.data);
                    $scope.error = errorResponse;
                });
            }
        };

        $scope.remArt2me = function($index, elArticulo) {
            var myArticle = elArticulo;
        var index = $scope.myUser.userArticles.indexOf(myArticle._id);
        $scope.myUser.userArticles.splice(index, 1);
            // remover de mis articulos en Scope

            var indice = $index;
            // console.log("Articulo a remover:: " + $scope.misArticulos);
            $scope.misArticulos.splice(indice, 1);

            //Update myUser
            $scope.myUser.$update(function(response) {
                // console.log("Mis articulos 2: " + $scope.misArticulos.length);
            }, function(errorResponse) {
                console.log("updatError: " + myArticle._id + errorResponse.data);
                $scope.error = errorResponse;
            });
        };
    }
]).directive('stopEvent', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            element.bind(attr.stopEvent, function(e) {
                e.stopPropagation();
            });
        }
    };
});