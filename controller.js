var app = angular.module('wordApp');

app.controller('wordCtrl', function($scope){

  $scope.arrayOfWords = [];

  var words = ['no', 'yes', 'hi', 'bye'];
  var phrases = ['i want that', 'but dad said', 'but mom said', 'go away', 'when can i have a brother', 'when can i have a sister'];
  var styles = ['bold', 'huge', 'small', 'crazy'];

  $scope.word = function () {
    $scope.arrayOfWords.push({
      word: words[Math.floor(Math.random() * words.length)],
      styling: ''
    });

  };

  $scope.wordStyled = function() {
    $scope.arrayOfWords.push ({
      word: words[Math.floor(Math.random() * words.length)],
      styling: styles[Math.floor(Math.random() * styles.length)]
    })

  };

  $scope.phrase = function () {
      $scope.arrayOfWords.push ({
        word: phrases[Math.floor(Math.random() * phrases.length)],
        styling: ''
      });
  };

  $scope.phraseStyled = function() {
      $scope.arrayOfWords.push ({
        word: phrases[Math.floor(Math.random() * phrases.length)],
        styling: styles[Math.floor(Math.random() * styles.length)]
      });
    };








});
