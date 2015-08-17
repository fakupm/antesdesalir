
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
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

  nameApp.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function() {
        $scope.closeLogin();
      }, 1000);
    };
  })


nameApp.controller('AppCtrl', function($scope) {
  $scope.$on('$ionicView.afterEnter', function(){
    setTimeout(function(){
      document.getElementById("custom-overlay").style.display = "none";
    }, 3000);
  });
});
