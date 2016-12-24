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
}
})();
