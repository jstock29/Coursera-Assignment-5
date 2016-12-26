(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);
InfoController.$inject = ['UserService','MenuService', 'ApiPath'];

function InfoController(UserService,MenuService, ApiPath) {
  var infoCtrl = this;

  infoCtrl.basePath = ApiPath;
  infoCtrl.user = UserService.get();
  infoCtrl.notSignedUp = angular.equals({}, infoCtrl.user);

  if (infoCtrl.user) {
    MenuService.getMenuItemsByShortName(infoCtrl.user.fav).then(function (response) {
      infoCtrl.dish=response;
      console.log(response);
    })
  }
}
})();
