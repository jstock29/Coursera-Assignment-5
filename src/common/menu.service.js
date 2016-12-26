(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);

MenuService.$inject = ['$http', 'ApiPath2'];
function MenuService($http, ApiPath2) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath2 + '/categories.json').then(function (response) {
      return response.data;
    });
  };

  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }
    return $http.get(ApiPath2 + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getMenuItemsByShortName = function(shortName) {
  return $http.get(ApiPath2 + '/menu_items.json').then(function (response) {
    var found = false;
    for(var i = 0; i < response.data.menu_items.length; i++) {
        if (response.data.menu_items[i].short_name == shortName) {
            found = true;
            console.log('found');
            return response.data.menu_items[i];
            break;
        }
    }
    console.log('get response is ')
    console.log(response);
    return error;

  });
}
}
})();
