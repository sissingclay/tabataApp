/**
 * Created by clay on 27/07/14.
 */
'use strict';

tabataApp.controller('settingsCtrl',['$scope', '$cookieStore','$log','counterService', function($scope,$cookieStore,$log,counterService){
    $scope.exerciseDuration = counterService.setInstance(25);
    $scope.exerciseBreak    = counterService.setInstance(10);
    $scope.exerciseRepeat   = counterService.setInstance(2);
    $scope.userData         = $cookieStore.get('userData');
    $scope.exercisesData    = $cookieStore.get('exerciseData');
    $scope.name             = $scope.userData.name + ' ' + $scope.userData.surname;
    $scope.email            = $scope.userData.email;
    $scope.totalTime        = $scope.exerciseDuration.count*$scope.exercisesData.length*$scope.exerciseRepeat.count;
    $scope.totalTimeMin     = parseFloat($scope.totalTime/60).toFixed(2);
    $scope.$watch('exerciseDuration', function(newVal, oldVal){
        $scope.totalTime    = $scope.exerciseDuration.count*$scope.exercisesData.length*$scope.exerciseRepeat.count;
        $scope.totalTimeMin = parseFloat($scope.totalTime/60).toFixed(2);
    }, true);
    $scope.$watch('exerciseRepeat', function(newVal, oldVal){
        $scope.totalTime    = $scope.exerciseDuration.count*$scope.exercisesData.length*$scope.exerciseRepeat.count;
        $scope.totalTimeMin = parseFloat($scope.totalTime/60).toFixed(2);
    }, true);
}]);

tabataApp.service('counterService', [function(){
    var aCounter = function(counter) {
        this.count = counter;
        this.increment = function(x) {
            this.count += x;
        };
        this.decrease = function(x) {
            if(this.count > 1){
                this.count -= x;
            }
        };
    }
    return {
        setInstance: function (counter) {
            return new aCounter(counter);
        }
    };
}]);