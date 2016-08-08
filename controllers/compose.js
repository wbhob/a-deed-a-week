webApp.controller('ComposeController', ['$scope', function($scope){
	$scope.foo = 'bar';
	$scope.popup = {};
	$scope.format = "MMMM d, yyyy";
	$scope.open1 = function() {
    $scope.popup.opened = true;
  };
}]);
