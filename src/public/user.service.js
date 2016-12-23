(function () {
    "use strict";

    angular.module('public')
        .service('UserService', UserService);


    UserService.$inject = [];
    function UserService($http, ApiPath) {
        var service = this;

        service.getRegistration = function () {
            return $http.get(ApiPath + '/users.json').then(function (response) {
                return response.data;
            });

        };

    }
})();
