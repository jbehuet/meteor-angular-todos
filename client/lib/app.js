/* CREATE ANGULAR APPLICATION AND LOAD MODULES */

angular.module('app', ['angular-meteor', 'ui.router']);

angular.module('app').run(function ($rootScope, $location) {
    // Watch path
    var path = function () {
        return $location.path();
    };
    $rootScope.$watch(path, function (newVal, oldVal) {
        $rootScope.activetab = newVal;
    });
});
