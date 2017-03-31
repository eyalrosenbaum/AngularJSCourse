(function(){
  'use strict'

  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'src/Menu/templates/item.template.html',
    bindings: {
      items: '<'
    }
  });

})();
