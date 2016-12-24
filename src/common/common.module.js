(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'http://jstock29-restaurant-server.heroku.com')
.constant('ApiPath2', 'https://davids-restaurant.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}
})();
