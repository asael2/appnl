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
        $scope.fastReader = function() {

            // I LOVE GLOBALS.
            var buttonSlider = document.querySelector('#wpm');
            var buttonStart = document.querySelector('#start');
            var commentEl = document.querySelector('#comment');
            var wpmEl = document.querySelector('#wpm');
            var readerEl = document.querySelector('#reader');
            var progressbar = document.getElementById('progressBar');
            var currentTimer = null;
            var speed = 60000;
            var delay = speed / parseInt(wpmEl.value, 10);
            var dynamic = 240;

            // function progresar(currentWord) {
            //     console.log("Current Word:: " + currentWord);
            //     console.log("Progresando current Word number:: " + progressbar);

            // }

            function processWord(word) {
                var center = Math.floor(word.length / 2);
                var letters = word.split('');
                var result = [];
                return letters.map(function(letter, idx) {
                    if (idx === center) {
                        return '<span class="highlight">' + letter + '</span>';
                    }
                    return letter;
                }).join('');
            }

            function positionWord() {
                var wordEl = readerEl.firstElementChild;
                var highlight = wordEl.firstElementChild;

                var centerOffsetX = (highlight.offsetWidth / 2) + highlight.offsetLeft;
                var centerOffsetY = (highlight.offsetHeight / 2) + highlight.offsetTop;

                wordEl.style.left = ((readerEl.clientWidth / 2) - centerOffsetX) + 'px';
                wordEl.style.top = ((readerEl.clientHeight / 2) - centerOffsetY) + 'px';
            }

            //velocidad
            buttonSlider.addEventListener('change', function(elem) {
                var speedPosition = this.value;
                speed = parseInt(speedPosition) + parseInt(speed);
                delay = speed / parseInt(wpmEl.value, 10);
            });

            //reiniciar 
            buttonStart.addEventListener('click', function() {

                var words = commentEl.textContent.split(/\s+/).map(processWord);
                var currentWord = 0;

                clearTimeout(currentTimer);

                var displayNextWord = function() {
                    var word = words[currentWord++];
                    var hasPause = /^\(|[,\.\)]$/.test(word);

                    readerEl.firstElementChild.innerHTML = word;

                    positionWord();
                    $scope.dynamic = dynamic + currentWord;
                    console.log($scope.dynamic);

                    if (currentWord !== words.length) {
                        currentTimer = setTimeout(displayNextWord, delay * (hasPause ? 3 : 1));
                    }
                };
                displayNextWord();
            });

        };



    }
]);