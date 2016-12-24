(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['dish','user'];
function InfoController(dish,user) {
  var $ctrl = this;
  $ctrl.user=user;
  $ctrl.dish=dish;
  console.log($ctrl.user);
  console.log($ctrl.dish);
}
})();
