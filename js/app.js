var app = angular.module('OHR', ['ngRoute'])

app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider){
    $routeProvider
        .when("/",{
            templateUrl: "template/Home.html",
        })
        /*.when("/register",{
            templateUrl: "directives/register.html",
            controller: "UserController as userCtrl"

        })
        .when("/login",{
            templateUrl:"directives/login.html",
            controller: "UserController as userCtrl"
        })
        .when("/history",{
            templateUrl:"directives/history.html",
            controller:"UserController as userCtrl"
        })
        .when("/contactus",{
            templateUrl:"directives/contact.html",
            controller: "UserController as userCtrl"
        })
        .when('/profile',{
            templateUrl:"directives/profile.html",
            controller: "UserController as userCtrl"
            })
        .when('/venues',{
            templateUrl:"directives/venues.html",
            controller: "UserController as userCtrl"
        })
        .when('/events',{
            templateUrl:"directives/events.html",
            controller: "UserController as userCtrl"
        })
        .when('/admin',{
            templateUrl:"directives/admin.html",
            controller: "UserController as userCtrl"
        })
        .when('/addVenue',{
            templateUrl:"directives/addVenue.html",
            controller: "UserController as userCtrl"
        })
        .when('/editVenue',{
            templateUrl:"directives/editVenue.html",
            controller: "UserController as userCtrl"
        })
        .when('/addEvent',{
            templateUrl:"directives/addEvent.html",
            controller: "UserController as userCtrl"
        })
        .when('/editEvent',{
            templateUrl:"directives/editEvent.html",
            controller: "UserController as userCtrl"
        })
        .when('/productDetailsHistory',{
            templateUrl:"directives/productDetailsHistory.html",
            controller: "UserController as userCtrl"
        })
        .when('/productDetails',{
            templateUrl:"directives/productDetails.html",
            controller: "UserController as userCtrl"
        })
        .when('/buyCards',{
            templateUrl:"directives/buyCards.html",
            controller: "UserController as userCtrl"
        })
        .when('/listAllVenues',{
            templateUrl:"directives/listAllVenues.html",
            controller:"UserController as userCtrl"
        })
        .when("/users",{
            templateUrl:"directives/users.html",
            controller: "UserController as userCtrl"
        })*/.otherwise({
         redirectTo: "/"

    })
}]);
