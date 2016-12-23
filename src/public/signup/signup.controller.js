(function () {
    "use strict";

    angular.module('public')
        .controller('SignupController', SignupController);

    SignupController.$inject = ['signup', '$http'];
    function SignupController(signup,$http) {
        var $ctrl = this;


        $ctrl.user = {
            first: '',
            last: '',
            email: '',
            phone: '',
            fav: ''
        };
        $ctrl.signup = signup;
        $ctrl.exists=true;
        $ctrl.submit = function () {
            console.log('Submitted!');
            var response = $http.get('https://jstock29-restaurant-server.herokuapp.com/menu_items/'+$ctrl.fav+'.json');
            console.log(response);
            if (Object.values(obj).indexOf($ctrl.fav) > -1) {
                console.log('exists');
                $ctrl.exists=true;
            }else{
                $ctrl.exists=false;
            }

            $ctrl.completed = true

        }
    }

})();
