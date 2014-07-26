tabataApp.controller('exerciseCtrl', ['$scope', function($scope){

    $scope.exercises    = [];
    $scope.count        = 1;
    $scope.showRemove   = false;

    $scope.$watch('count', function() {
        if($scope.count>5){
            $scope.showRemove = true;
        } else {
            $scope.showRemove = false;
        }
    });

    $scope.addExercise  = function () {

        $scope.exercises.push({
            exercisePlaceholder: "Exercise "+$scope.count,
            name: "exercise"+$scope.count
        });

        ++$scope.count;
    };

    $scope.removeExercise  = function () {

        $scope.exercises.pop();

        --$scope.count;
    };

}]);