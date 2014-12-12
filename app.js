var app = angular.module('app', ['ui.router']);
/* This is the piece that defines the state providers. */
app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/home");
//Set up the states
  $stateProvider
  //routing for home states
      .state('home', {
      url: '/home',
      templateUrl: "templates/content/home.html"
    })
    .state('builder', {
      url: '/pc-builder',
      templateUrl: "templates/content/builder.html"
    })
});


