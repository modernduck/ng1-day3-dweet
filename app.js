  angular.module('dweet', ['ngRoute','dweet.core'])
    .config(function($routeProvider){

        $routeProvider.when("/", {
            templateUrl:"pages/dashboard.html",
            
        }).when("/form", {
            templateUrl:"pages/form.html",
            controller:"FormController"  
        })

    }).controller("MainController", function($scope, Dweet){
        Dweet.getTemperature().then( data => {
            $scope.data = data;
            console.log($scope.data)
            $scope.$apply()  
        })


    }).controller("FormController", function($scope, Dweet){
        $scope.send = function(){
            ///$scope.temp
            //$scope.participant
            Dweet.createData($scope.temp, $scope.participant);
        }
    })