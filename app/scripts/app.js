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

        .when('/biding',{
            templateUrl:'views/biding.html',
            controller:'BidingCtrl'
        })
        .when('/competition',{
            templateUrl:'views/competition.html',
            controller:'CompetitionCtrl'

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
