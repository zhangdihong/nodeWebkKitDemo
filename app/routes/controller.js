/**
 * Created by zhangdihong on 2014/12/19.
 */
global._$=jQuery;
var app=angular.module('wapp',['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/',{templateUrl:'../view/stu.html',controller:'stuCtrl'})
        .when('/stu',{templateUrl:'../view/stu.html',controller:'stuCtrl'})
        .when('/sco',{templateUrl:'../view/sco.html',controller:'ScoCtrl'})
        .when('/rep',{templateUrl:'../view/rep.html',controller:'repCtrl'})
        .otherwise({redirectTo:'/'});
}]);
app.controller('stuCtrl',['$scope', function ($scope) {
    
}]);
app.controller('ScoCtrl',['$scope', function ($scope) {

}]);
app.controller('repCtrl',['$scope', function ($scope) {
    
}])