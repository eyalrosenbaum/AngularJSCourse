(function(){
  'use strict'

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.items = "";
    $scope.message ="";
    $scope.reply = function(){
    $scope.counter = 0;
    var arr = toArray($scope.items);

    for (var i=0;i<arr.length;i++)
      if (arr[i]!="")
          $scope.counter++;

      if ($scope.counter == 0)
        $scope.message = "Please enter data first";
      else if ($scope.counter<=3)
        $scope.message = "Enjoy!";
      else{
        console.log("here I am");
        $scope.message = "Too much!";
      }
      };

      function toArray(itemsString){
        return itemsString.split(',');
      };
  }


})();
