'use strict';

tabataApp.controller('exerciseCtrl', ['$scope', '$log', '$cookieStore', '$location', function($scope,$log,$cookieStore,$location){

    $scope.exercises        = [];
    $scope.count            = 1;
    $scope.showRemove       = false;
    $scope.startup          = {};
    $scope.isExerciseAdded  = false;
    $scope.errorMessage     = false;

    $scope.$watch('count', function() {

        if($scope.count>5){
            $scope.showRemove       = true;
            $scope.isExerciseAdded  = true;

        } else {
            $scope.showRemove       = false;
            $scope.isExerciseAdded  = false;
        }
    });

    $scope.addExercise  = function () {

        $scope.exercises.push({
            exercisePlaceholder: "Exercise "+$scope.count,
            name: "exercise"+$scope.count,
            text: ""
        });

        ++$scope.count;
    };

    $scope.removeExercise  = function () {

        $scope.exercises.pop();

        --$scope.count;
    };

    $scope.submitForm = function(isValid) {

        // check to make sure the form is completely valid
        $log.log($scope.exercises);

        if (isValid) {
            if($scope.exercises.length >= 3) {
                $cookieStore.put('userData',$scope.startup);
                $cookieStore.put('exerciseData',$scope.exercises);
                $location.path('/settings');
            } else {
                $scope.errorMessage = true;
            }
        }

    };

}]);