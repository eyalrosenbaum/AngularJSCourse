(function(){
  'use strict';

  angular.module('NarrowItDownApp',[])
  .service('MenuSearchService',MenuSearchService)
  .controller('NarrowItDownController',NarrowItDownController)
  .directive('foundItems',foundItemsDirective);


function foundItemsDirective(){
  var ddo = {
    templateUrl: 'foundItems.html',
    restrict: 'E',
    scope: {
      foundItems: '<',
      onRemove: '&'
    // }
    },
    controller: foundItemsDirectiveController,
    controllerAs: 'ctrl',
    bindToController: true
  };

  return ddo;
}

function foundItemsDirectiveController(){
  var ctrl = this;

  // console.log("ctrl.foundItems: ");
  // ctrl.foundItems = [];
  // for (var i = 0;i < ctrl.foundItems.length;i++)
  //   console.log(ctrl.foundItems[i]);
}

NarrowItDownController.$inject = ['MenuSearchService','$http'];
function NarrowItDownController(MenuSearchService,$http){
  var ctrl = this;

  ctrl.narrow = function(){
    var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);

    promise.then(function(response){
      ctrl.foundItems = response;
      // for (var i=0;i<ctrl.found.length;i++){
      //   console.log(ctrl.found[i].name+" "+ctrl.found[i].short_name+" "+ctrl.found[i].description);
      // }
  });
  };

  ctrl.removeItem = function(index){
    ctrl.foundItems.splice(index,1);
  };
}


MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm){
    return $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      }).then(function(result){
      var menuItems = result.data;
      var foundItems = [];
      for (var i=0;i<menuItems.menu_items.length;i++)
        if ((menuItems.menu_items[i].description).includes(searchTerm))
          foundItems.push(menuItems.menu_items[i]);
      console.log("foundItems = "+foundItems.length);
      return foundItems;
    });

  }
};
})();
