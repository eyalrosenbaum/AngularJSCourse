(function(){
  'use strict';

  angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'src/Menu/templates/category.template.html',
    bindings: {
      categories: '<'
    }
  });


})();
