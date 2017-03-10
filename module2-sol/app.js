(function(){
  'use strict'

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);


  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService){
    var toBuy = this;

    toBuy.list = ShoppingListCheckOffService.getItemsTobuy();

    toBuy.removeItem = function(itemIndex){
      ShoppingListCheckOffService.moveToBought(itemIndex);
    };
  }

  function AlreadyBoughtController(ShoppingListCheckOffService){
    var alreadyBought = this;

    alreadyBought.list = ShoppingListCheckOffService.getAlreadyBoughtItems();
  }

  function ShoppingListCheckOffService(){
    var service = this;

    var toBuy = [{
                    item_name: "cookie",
                    item_quantitiy: 10
                  },
                  {
                    item_name: "cookie",
                    item_quantitiy: 10
                  },
                  {
                    item_name: "cookie",
                    item_quantitiy: 10
                  },
                  {
                    item_name: "cookie",
                    item_quantitiy: 10
                  },
                  {
                    item_name: "cookie",
                    item_quantitiy: 10
                  }
                ];
    var bought = [];

    service.getItemsTobuy = function(){
      return toBuy;
    };

    service.getAlreadyBoughtItems = function(){
      return bought;
    };

    service.moveToBought = function(itemIndex){
      bought.push(toBuy[itemIndex]);
      toBuy.splice(itemIndex,1);
    };

  }

})();
