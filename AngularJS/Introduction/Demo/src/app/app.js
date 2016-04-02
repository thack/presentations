angular.module('vegasJS', [])
    .controller('AppController', function($scope, $http, $location) {
        
        // variables to show/hide page elements
        $scope.showDiv = false;
        $scope.className = "fourth";
        $scope.divNumber = 0;
        
        $scope.buttonClickOne = function () {
            $scope.showDiv = !$scope.showDiv;
        }
        
        $scope.buttonClickTwo = function (className) {
            $scope.className = className;
        }
        
        $scope.buttonClickThree = function (number) {
            $scope.divNumber = number;
        }
        
    });
