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
                console.log("updatError: " + myArticle._id + errorResponse);
                $scope.error = errorResponse;
            });


            // myUser.$update({
            //     userArticles: artid
            // })
            // console.log(user.userArticles.length);

            // myUser.findByIdAndUpdate(user, {
            //     userArticles: userArticles
            // }, function(err, req) {
            //     if (!err) console.log(">>Articulo Actualizado.");
            //     else console.log('Error:' + err);
            // });
        };

        // myUser.push({
        //     userArticles: myArticle
        // }).update({
        // _id: myUser
        // });



    }
]);


// console.log($scope.article._id);




//     $update(user.userArticles, myArticle._id);
//     console.log("userArticles: " + user.userArticles.length);
//     // myUser.$update(function(response) {
//     //     console.log("Actualize!! con : " + user.userArticles.length + "__" + response);
//     // }, function(errorResponse) {
//     //     console.log("updatError: " + myArticle._id + errorResponse);
//     //     $scope.error = errorResponse;
//     // });

// }