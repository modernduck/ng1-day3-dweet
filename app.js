  angular.module('dweet', ['ngRoute'])
    .config(function($routeProvider){

        $routeProvider.when("/", {
            templateUrl:"pages/dashboard.html",
            
        }).when("/form", {
            templateUrl:"pages/form.html",
            
        })

    })