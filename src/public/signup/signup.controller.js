(function () {
"use strict";

angular.module('public')
    .controller('SignupController', SignupController);

    SignupController.$inject = ['signup'];
    function SignupController(signup) {
        var $ctrl = this;

        var info={
            first:'',
            last:'',
            email:'',
            phone:'',
            fav:''
        };
        $ctrl.signup = signup;
    }

})();
