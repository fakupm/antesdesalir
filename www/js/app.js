
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })



  .state('tab.inicio', {
    url: '/inicio',
    views: {
      'inicio': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicio'
      }
    }
  })

  .state('tab.clima', {
      url: '/clima',
      views: {
        'clima': {
          templateUrl: 'templates/clima.html',
          controller: 'clima'
        }
      }
    })

  .state('tab.subte', {
    url: '/subte',
    views: {
      'subte': {
        templateUrl: 'templates/subte.html',
        controller: 'subte'
      }
    }
  })
  .state('tab.autopistas', {
    url: '/autopistas',
    views: {
      'autopistas': {
        templateUrl: 'templates/autopistas.html',
        controller: 'autopistas'
      }
    }
  })
  .state('tab.sube', {
    url: '/sube',
    views: {
      'sube': {
        templateUrl: 'templates/sube.html',
        controller: 'sube'
      }
    }
  })
  .state('tab.trenes', {
    url: '/trenes',
    views: {
      'trenes': {
        templateUrl: 'templates/trenes.html',
        controller: 'trenes'
      }
    }
  })
  

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/clima');

});
