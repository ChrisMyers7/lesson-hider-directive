angular.module('lessonApp')
  .controller('lessonCtrl', function($scope) {

    $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

    $scope.test = 'two way data binding!';

    $scope.announceDay = function(lesson, day) {
      if (day === undefined) {
        alert(lesson + ' is currently not active');
      } else {
      alert(lesson + ' is active on ' + day + '.')
    }
  }

  });
