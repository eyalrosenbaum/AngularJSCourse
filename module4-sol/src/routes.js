  (function(){
    'use strict';

    angular.module('MenuApp')
    .config(RoutesConfig);

    // check to see why we use RoutesConfig like this and where was it declared

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

      // Redirect to home page if no other URL matches
      $urlRouterProvider.otherwise('/');

      // *** Set up UI states ***
      $stateProvider

      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/Menu/templates/home.template.html'
      })

      // Categories page
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/Menu/templates/categories.template.html',
        controller: 'MainMenuCategoriesController as categoryctrl',
        resolve: {
          categories: ['MenuDataService', function(MenuDataService){
            return MenuDataService.getAllCategories();
          }]
        }
      })

      //Item page
      .state('categoryItems', {
        url: '/{categoryName}/{categoryShortName}',
        templateUrl: 'src/Menu/templates/items.template.html',
        controller : 'CategoryItemsController as categoryItems',
        resolve: {
          items: ['$stateParams','MenuDataService',function($stateParams,MenuDataService){
            console.log("categoryShortName is "+ $stateParams.categoryShortName);
            return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
          }],
          name:['$stateParams',function($stateParams){
            return $stateParams.categoryName;
        }]
      }
      })
    };


  })();
