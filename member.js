function skillsMember() {
  return {
    restrict: 'E',
    scope: {
      skills: '=',
      active: '='
    },
    templateUrl: 'skills-member.html',
    link: function(scope) {
      scope.active = scope.active || 0;
    }
  };
}