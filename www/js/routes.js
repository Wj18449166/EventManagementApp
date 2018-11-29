angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.event', {
    url: '/event/index',
    views: {
      'tab1': {
        templateUrl: 'templates/event.html',
        controller: 'eventCtrl'
      }
    }
  })

  .state('tabsController.organizer', {
    url: '/event/organizer',
    views: {
      'tab2': {
        templateUrl: 'templates/organizer.html',
        controller: 'organizerCtrl'
      }
    }
  })

  .state('tabsController.venue', {
    url: '/event/venue',
    views: {
      'tab3': {
        templateUrl: 'templates/venue.html',
        controller: 'venueCtrl'
      }
    }
  })

  .state('tabsController.person', {
    url: '/event/person',
    views: {
      'tab4': {
        templateUrl: 'templates/person.html',
        controller: 'personCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.detail'
      2) Using $state.go programatically:
        $state.go('tabsController.detail');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/event/detail
      /page1/tab2/event/detail
      /page1/tab3/event/detail
      /page1/tab4/event/detail
  */
  .state('tabsController.detail', {
    url: '/event/detail/:id',
    views: {
      'tab1': {
        templateUrl: 'templates/detail.html',
        controller: 'detailCtrl'
      },
      'tab2': {
        templateUrl: 'templates/detail.html',
        controller: 'detailCtrl'
      },
      'tab3': {
        templateUrl: 'templates/detail.html',
        controller: 'detailCtrl'
      },
      'tab4': {
        templateUrl: 'templates/detail.html',
        controller: 'detailCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.maps'
      2) Using $state.go programatically:
        $state.go('tabsController.maps');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/event/map
      /page1/tab2/event/map
      /page1/tab3/event/map
      /page1/tab4/event/map
  */
  .state('tabsController.maps', {
    url: '/event/map',
    views: {
      'tab1': {
        templateUrl: 'templates/maps.html',
        controller: 'mapsCtrl'
      },
      'tab2': {
        templateUrl: 'templates/maps.html',
        controller: 'mapsCtrl'
      },
      'tab3': {
        templateUrl: 'templates/maps.html',
        controller: 'mapsCtrl'
      },
      'tab4': {
        templateUrl: 'templates/maps.html',
        controller: 'mapsCtrl'
      }
    }
  })

  .state('tabsController.oevent', {
    url: '/event/Oevent/:org',
    views: {
      'tab2': {
        templateUrl: 'templates/oevent.html',
        controller: 'oeventCtrl'
      }
    }
  })

  .state('tabsController.vevent', {
    url: '/event/vevent/:ven',
    views: {
      'tab3': {
        templateUrl: 'templates/vevent.html',
        controller: 'veventCtrl'
      }
    }
  })

  .state('tabsController.login', {
    url: '/log',
    views: {
      'tab4': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('tabsController.registerEvents', {
    url: '/registerEvents',
    views: {
      'tab4': {
        templateUrl: 'templates/registerEvents.html',
        controller: 'registerEventsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/event/index')


});