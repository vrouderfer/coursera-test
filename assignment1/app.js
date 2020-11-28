(function () {
'use strict';

angular.module('LunchChecker', [])

.controller('LunchCheckerController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope'];
function LunchCheckerController($scope) {
  $scope.lunchMenu = "";
  $scope.lunchStatus = "";
  $scope.calculateStatus = function () {
    $scope.textStyle = "form-group message text-danger";
    $scope.borderColor = "border-color:red";
    $scope.lunchStatus = "Please enter data first!";
    if ($scope.lunchMenu) {
      var count = calculateNumberOfDishes();
      if (count > 0) {
        $scope.textStyle = "form-group message text-success";
        $scope.borderColor = "border-color:green";
        if ( count <= 3) {
          $scope.lunchStatus =  "Enjoy!";
        } else {
          $scope.lunchStatus =  "Too much!";
        }
      }
    }
  };

  $scope.clearStyles = function () {
    $scope.textStyle = "";
    $scope.borderColor = "";
    $scope.lunchStatus =  "";
  };

  function calculateNumberOfDishes() {
    var dishes = $scope.lunchMenu.split(",");
    if (dishes) {
      var count = 0;
      for (var i = 0; i < dishes.length; i++) {
        if (dishes[i] && dishes[i].length > 0) {
          count++;
        }
      }
      return count;
    }
  };
 }

})();
