(function () {
"use strict";

angular.module('common')
  .service('UserService', UserService);

UserService.$inject = ['$window'];
function UserService($window) {
  var service=this;
  var profile={};

   service.store = function(value) {
  $window.userService = value;
  profile=$window.userService
  console.log(profile);
  };

  service.get = function() {
    console.log(profile);
    if(profile){
      return profile;
    }else{
      return;
    }
  };


 }
})();
