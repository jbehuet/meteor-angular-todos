/* ROUTER */

angular.module('app').config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'client/views/main.html',
            controller: 'mainController'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'client/views/about.html'
        });

    $urlRouterProvider.otherwise("/");
});
