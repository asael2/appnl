'use strict';
angular.module('elearning').controller('LearnarticleController', ['$scope', '$stateParams', '$location', 'Authentication', 'Articles',
    function($scope, $stateParams, $location, Authentication, Articles) {
        $scope.authentication = Authentication;

        //listar 1 articulo
        $scope.findOne = function() {
            $scope.article = Articles.get({
                articleId: $stateParams.articleId
            });
        };

    }
]);