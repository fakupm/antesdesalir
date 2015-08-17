
angular.module('starter', ['ionic', 'starter.controllers'])


.run(function($ionicPlatform, $cordovaStatusbar) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }

    $cordovaStatusbar.styleHex('#D32F2F');
  });
})

var nameApp = angular.module('starter', ['ionic', 'ui.router']);

nameApp.config(function($stateProvider, $urlRouterProvider) {

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
      .state('app.login', {
        url: '/login',
        views: {
          'menuContent': {
            templateUrl: 'templates/login.html'
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
  })



nameApp.controller('AppCtrl', function($scope) {
  $scope.$on('$ionicView.afterEnter', function(){
    setTimeout(function(){
      document.getElementById("custom-overlay").style.display = "none";
    }, 3000);
  });
});
