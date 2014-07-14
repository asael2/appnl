'use strict';

angular.module('articles').controller('LearnrouteController', ['$scope', '$stateParams', '$location', 'Authentication', 'Articles', 'Users',
    function($scope, $stateParams, $location, Authentication, Articles, Users) {

        $scope.authentication = Authentication;
        $scope.user = Authentication.user;
        $scope.misArticulos = {};
        // $scope.myUser = new Users($scope.user);
        // $scope.userArticles = $scope.myUser.userArticles;
        var anArticle = new Articles($scope.article);
        var myArticles = $scope.user.userArticles;

        $scope.find = function() {
            var articlesLength = myArticles.length;

            for (var i = 0; i < articlesLength; i++) {
                console.log(myArticles[i]);
                anArticle = Articles.get({
                    articleId: myArticles[i]
                });
                $scope.misArticulos[i] = anArticle;
                console.log($scope.misArticulos[i]);
            }

            // console.log(oneArtId);

        }

    }
    // $scope.misArticulos = Articles.query({
    //     //userArticles: $scope.userArticles

    // }, function(err, docs) {
    //     console.log("lololol");
    // });
    // console.log(misArticulos);



    //     $scope.findOne = function() {
    //         $scope.article = Articles.get({
    //             articleId: $stateParams.articleId
    //         });
    //         console.log($scope.articles);
    //     };
    // }
]);

// articleByID = function(req, res, next, id)