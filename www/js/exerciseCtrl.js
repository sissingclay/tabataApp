tabataApp.controller('exerciseCtrl', ['$scope', function($scope){

    $scope.exercises    = [];
    var count           = 1;
    $scope.addExercise  = function () {

        $scope.exercises.push({
            exercisePlaceholder: "Exercise "+count,
            name: "exercise"+count
        });

        ++count;
    };

}]);