(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['user', 'dish'];
function InfoController(user, dish) {
  var $ctrl = this;
  $ctrl.user=user;
  $ctrl.dish=dish;
  console.log($ctrl.user);
  console.log($ctrl.dish);
}
})();
