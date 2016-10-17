$(document).ready(function () {
  var a = 0;

    $('.readMore').on('click', function () {
      if(a == 0){
        alert('Niste ulogovani');
      }
    })

    $('.login').on('click', function(){
        $('.login_hide').slideToggle('fast');

    })
    $('.comment').on('click', function(){
          $('.comment_hide').slideToggle('fast')
    })
    $(document).on('scroll', function () {
      $('header').css(
        // css za skrol 
      )
    })
})



app.controller('myCtrl', function($scope){
  var app = angular.module('myApp', ["ngRoute"]);

  var limitStep = 2;
  $scope.limit = limitStep;
  $scope.incrementLimit = function() {
    $scope.limit += limitStep;
  };
  $scope.decrementLimit = function() {
    $scope.limit -= limitStep;
  };

  $scope.stories = [
    {
      author : "Milos Ciganovic",
      datum : "10.09.2016",
      naslov : "Naslov price",
      vrsta : "Drama",
      prica : "What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      author : "Nemanja Kovacevic",
      datum : "10.09.2012",
      naslov : "Nemanjin zivot",
      vrsta : "tragikomedija",
      prica : "What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      author : "Nemanja Kovacevic",
      datum : "10.09.2012",
      naslov : "Nemanjin zivot",
      vrsta : "tragikomedija",
      prica : "What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      author : "Nemanja Kovacevic",
      datum : "10.09.2012",
      naslov : "Nemanjin zivot",
      vrsta : "tragikomedija",
      prica : "What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  ]
});
