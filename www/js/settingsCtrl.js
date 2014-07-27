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
    $log.log($scope.exercisesData);
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