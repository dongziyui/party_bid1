'use strict';

/**
 * @ngdoc overview
 * @name activityappApp
 * @description
 * # activityappApp
 *
 * Main module of the application.
 */
angular
  .module('partyBid1App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
<<<<<<< HEAD
        .when('/biding',{
            templateUrl:'views/biding.html',
            controller:'BidingCtrl'
        })
        .when('/competition',{
            templateUrl:'views/competition.html',
            controller:'CompetitionCtrl'
=======
        .when('/competition',{
            templateUrl:'views/competition.html',
            controller:'competitionCtrl'
>>>>>>> 78d490883211396b560ef0cbf95940675f239022
        })
      .when('/create', {
            templateUrl: 'views/create.html',
            controller: 'CreateCtrl'
      })
        .when('/', {
            templateUrl: 'views/list.html',
            controller: 'ListCtrl'
        })
        .when('/active',{
            templateUrl:'views/active.html',
            controller:'ActiveCtrl'
        })

      .otherwise({
        redirectTo: '/'
      });

  });
