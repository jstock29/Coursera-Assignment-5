(function () {
    "use strict";

    angular.module('public')
        .service('SignupService', SignupService);


    SignupService.$inject = [];
    function SignupService($http, ApiPath) {
        var service = this;

        service.getRegistration = function () {
            return $http.get(ApiPath + '/categories.json').then(function (response) {
                return response.data;
            });
        };

    }
})();
