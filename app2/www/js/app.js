'use strict';
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('crewapp', [
  'ionic',
  'crewapp.splash',
  'crewapp.signup',
  'crewapp.login',
  'crewapp.question',
  'crewapp.splash2'
  ])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'js/splash/splash.html',
    controller: 'SplashController'
  });

  $stateProvider.state('splash2', {
    url: '/splash2',
    templateUrl: 'js/splash2/splash.html',
    controller: 'SplashController2'
  });

  $stateProvider.state('question', {
    url: '/question',
    templateUrl: 'js/question/question.html',
    controller: 'QuestionController'
  });

  $stateProvider.state('signup', {
    url: '/signup',
    templateUrl: 'js/signup/signup.html',
    controller: 'SignUpController'
  });

  $stateProvider.state('login', {
    url: '/login',
    templateUrl: 'js/login/login.html',
    controller: 'LoginController'
  });
})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
