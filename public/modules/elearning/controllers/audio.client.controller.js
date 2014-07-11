'use strict';
angular.module('elearning').controller('AudioController', ['$scope',
    function($rootScope, $scope, $stateParams, $location, Authentication, Articles) {
        $scope.authentication = Authentication;
        //get one article
        $scope.findOne = function() {
            $scope.article = Articles.get({
                articleId: $stateParams.articleId
            });
        };
    }
]);

// angular.module('elearning').directive('unaudio', function($sce) {
//     return {
//         restrict: 'EA',
//         scope: {
//             code: '='
//         },
//         replace: true,
//         template: '<audio id="click1"><source src="{{url}}" type="audio/mp3"></audio>',
//         link: function(scope) {
//             scope.$watch('code', function(newVal) {
//                 if (newVal) {
//                     scope.url = $sce.trustAsResourceUrl("" + newVal);
//                 }
//             });
//         }
//     };
// });