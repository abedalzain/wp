// Ionic Starter App

angular.module('underscore', [])
.factory('_', function() {
  return window._; // assumes underscore has already been loaded on the page
});

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('ingredientApp', ['ionic', 'ingredientApp.directives', 'ingredientApp.controllers', 'templates', 'ingredientApp.services', 'ingredientApp.config', 'ngMap', 'ingredientApp.filters', 'angularMoment', 'underscore',
'ingredientApp.factories', 'ngCordova'])

.run(function($ionicPlatform, AuthService, $rootScope, $state, PushNotificationsService) {

   $ionicPlatform.on("deviceready", function(){
    $state.go('app.home');

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    PushNotificationsService.register();
  });

   $ionicPlatform.on("resume", function(){
    PushNotificationsService.register();
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "side-menu.html",
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: "/home",
    views: {
      'menuContent': {
        templateUrl: "home.html",
        controller: 'HomeCtrl'
      }
    },
    data: {
      authenticate: false
    }
  })

  .state('app.bookmarks', {
    url: "/bookmarks",
    views: {
      'menuContent': {
        templateUrl: "bookmarks.html",
        controller: 'BookMarksCtrl'
      }
    },
    data: {
      authenticate: false
    }
  })

  .state('app.contact', {
    url: "/contact",
    views: {
      'menuContent': {
        templateUrl: "contact.html",
        controller: 'ContactCtrl'
      }
    },
    data: {
      authenticate: false
    }
  })

  .state('app.post', {
    url: "/post/:postId",
    views: {
      'menuContent': {
        templateUrl: "post.html",
        controller: 'PostCtrl'
      }
    },
    data: {
      authenticate: false
    }
  })


  .state('app.settings', {
    url: "/settings",
    views: {
      'menuContent': {
        templateUrl: "settings.html",
        controller: 'SettingCtrl'
      }
    },
    data: {
      authenticate: true
    }
  })

  .state('app.category', {
    url: "/category/:categoryTitle/:categoryId",
    views: {
      'menuContent': {
        templateUrl: "category.html",
        controller: 'PostCategoryCtrl'
      }
    },
    data: {
      authenticate: false
    }
  })

;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
})

;
