(function() {
  'use strict';

  angular.module('myAppApp')
    .controller('TaskCtrl', function ($scope, $http) {
      $http.get('data/tasks.json')
        .then(function (res) {
            $scope.tasks = res.data;
        });
    }).directive('taskList', function() {
      return {
        restrict: 'E',
        templateUrl: 'views/tasks.html',
        replace: true
      };
    });
})();