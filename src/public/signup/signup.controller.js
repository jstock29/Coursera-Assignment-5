(function () {
    "use strict";

    angular.module('public')
        .controller('SignupController', SignupController);

    SignupController.$inject = ['$http'];
    function SignupController($http) {
        var $ctrl = this;

        $ctrl.user = {
            first: 'Jared',
            last: 'Stock',
            email: 'jstock529@gmail.com',
            phone: '303-995-1049',
            fav: 'L1'
        };
        $ctrl.error='';
        $ctrl.message='';

        $ctrl.submit = function () {
            var response = $http.get('https://jstock29-restaurant-server.herokuapp.com/menu_items/'+$ctrl.user.fav+'.json');
            response.success(function(data, status, headers, config) {
                console.log(response.$$state.value.data);
                console.log(response.$$state.value.data.short_name);
                $ctrl.message='Your information has been saved!'
                $ctrl.error='';
            });
            response.error(function(data, status, headers, config) {
                console.log('error');
                $ctrl.error='No such menu number exists.'
                $ctrl.message=''

            });

        }
    }

})();
