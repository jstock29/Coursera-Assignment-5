(function () {
"use strict";

angular.module('common')
  .service('UserService', UserService);

UserService.$inject = ['$http', 'ApiPath'];
function UserService($http, ApiPath) {
  var service = this;

  service.getUser=function (user) {
    console.log(user);
    return user;
  };

  service.getProfile = function (short_name) {
    if (short_name) {
      config.params = {'short_name': short_name};
    }
    return $http.get(ApiPath+'/menu_items/'+short_name+'.json').then(function (response) {
      console.log(response.$$state.value.data);
      return response.$$state.value.data;
    });
  };
}
})();
