// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js



angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform, $cordovaStatusbar) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }

    $cordovaStatusbar.styleHex('#D32F2F');
  });
})


.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.clima', {
    url: '/clima',
    views: {
      'menuContent': {
        templateUrl: 'templates/clima.html'
      }
    }
  })

  .state('app.subte', {
      url: '/subte',
      views: {
        'menuContent': {
          templateUrl: 'templates/subte.html'
        }
      }
    })
    .state('app.trenes', {
      url: '/trenes',
      views: {
        'menuContent': {
          templateUrl: 'templates/trenes.html'
        }
      }
    })
    .state('app.accesos', {
      url: '/accesos',
      views: {
        'menuContent': {
          templateUrl: 'templates/accesos.html'
        }
      }
    })
    .state('app.sube', {
      url: '/sube',
      views: {
        'menuContent': {
          templateUrl: 'templates/sube.html'
        }
      }
    })
    .state('app.acercade', {
      url: '/acercade',
      views: {
        'menuContent': {
          templateUrl: 'templates/acercade.html'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/clima');
});
