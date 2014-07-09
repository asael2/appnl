'use strict';
angular.module('elearning').controller('LearnarticleController', ['$rootScope', '$scope', '$stateParams', '$location', 'Authentication', 'Articles',
    function($rootScope, $scope, $stateParams, $location, Authentication, Articles) {
        $scope.authentication = Authentication;
        //listar 1 articulo
        $scope.findOne = function() {
            $scope.article = Articles.get({
                articleId: $stateParams.articleId
            });
        };
        $scope.progresar = function(currentWord, words) {
            $scope.$apply(function() {
                $scope.readProgress = currentWord / words.length * 100;
            });

        }

        $scope.fastReader = function() {

            // I LOVE GLOBALS.
            var commentEl = document.querySelector('#comment');
            var readerEl = document.querySelector('#reader');

            var buttonSlider = document.querySelector('#wpm');
            var buttonStart = document.querySelector('#start');

            var currentTimer = null;
            var speed = 60000;
            var delay = speed / parseInt(buttonSlider.value, 10);
            var dynamic = 240;


            $scope.speedMore = function() {
                buttonSlider.stepUp(4);
                speed = parseInt(buttonSlider.value) + parseInt(speed);
                delay = speed / parseInt(buttonSlider.value, 10);
            }

            $scope.speedLess = function() {
                buttonSlider.stepDown(4);
                speed = parseInt(buttonSlider.value) + parseInt(speed);
                delay = speed / parseInt(buttonSlider.value, 10);
            }

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

            buttonSlider.addEventListener('change', function() {
                speed = parseInt(this.value) + parseInt(speed);
                delay = speed / parseInt(this.value, 10);
            });

            buttonStart.addEventListener('click', function() {
                var words = commentEl.textContent.split(/\s+/).map(processWord);
                var currentWord = 0;

                clearTimeout(currentTimer);

                var displayNextWord = function() {
                    console.log("currentTimer: " + currentTimer + " - currentWord: " + currentWord);
                    var word = words[currentWord++];
                    var hasPause = /^\(|[,\.\)]$/.test(word);

                    readerEl.firstElementChild.innerHTML = word;

                    positionWord();

                    $scope.progresar(currentWord, words);

                    if (currentWord !== words.length) {
                        currentTimer = setTimeout(displayNextWord, delay * (hasPause ? 3 : 1));
                    }
                };
                displayNextWord();
            });

        };



    }
]);