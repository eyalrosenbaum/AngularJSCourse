(function(){
  'use strict';

  angular.module('MenuApp')
  .controller('CategoryItemsController',CategoryItemsController);


  CategoryItemsController.$inject = ['items','name'];
  function CategoryItemsController(items,name){
    var categoryItems = this;
    categoryItems.name = name;
    categoryItems.items = items.data.menu_items;
  }

})();
