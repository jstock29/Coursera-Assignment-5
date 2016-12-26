(function () {
  "use strict";

  angular.module('public')
  .controller('SignupController', SignupController);

  SignupController.$inject = ['$scope','MenuService','UserService'];
  function SignupController($scope,MenuService, UserService) {
    var $ctrl = this;

    $ctrl.user = {
      first: 'Testy',
      last: 'McTestface',
      email: 'test@gmail.com',
      phone: '123-456-7890',
      fav: 'DK1'
    };

    $ctrl.error='';
    $ctrl.message='';

    $ctrl.submit = function() {
      var shortName = $ctrl.user.fav ? $ctrl.user.fav.toUpperCase() : '';
      MenuService.getMenuItemsByShortName(shortName).then(function (response) {
        console.log(response);
        UserService.store($ctrl.user);
        $ctrl.saved = true;
        $ctrl.user = {};
        $ctrl.error='';
        $ctrl.message='Your information has been saved';
      }).catch(function (response) {
        $ctrl.error='Invalid menu number';
        $ctrl.message='';
        // if ($ctrl.saved) {
        //   $ctrl.saved = false;
        //   $ctrl.error='';
        //   $ctrl.message='';
        // }
      })
    }
  }
})();
