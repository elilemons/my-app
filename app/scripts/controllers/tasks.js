(function() {
  'use strict';

  angular.module('myAppApp')
  .directive('taskList', function() {
      return {
        restrict: 'E',
        templateUrl: 'views/tasks.html',
        replace: true,
        scope: {}, // isolates the scope
        controller: function($scope, $http) {
          $http.get('data/tasks.json')
            .then(function (res) {
                $scope.tasks = res.data;
            });
        }
      };
    });
})();