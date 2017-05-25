  angular.module('dweet', ['ngRoute','dweet.core'])
    .config(function($routeProvider){

        $routeProvider.when("/", {
            templateUrl:"pages/dashboard.html",
            
        }).when("/form", {
            templateUrl:"pages/form.html",
            
        })

    }).controller("MainController", function($scope, Dweet){
        Dweet.getTemperature().then( data => {
            $scope.data = data;
            console.log($scope.data)
            $scope.$apply()  
        })

    })