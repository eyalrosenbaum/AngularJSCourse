(function(){
  'use strict';

  angular.module('MenuApp')
  .controller('MainMenuCategoriesController',MainMenuCategoriesController);


  MainMenuCategoriesController.$inject = ['categories'];
  function MainMenuCategoriesController(categories){
    var mainCategories = this;
    mainCategories.categories = categories.data;
  }

})();
