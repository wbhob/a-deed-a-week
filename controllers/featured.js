webApp.controller('FeaturedController', ['$scope', '$firebaseArray', '$firebaseObject', function($scope, $firebaseArray, $firebaseObject){
	$scope.foo = 'bar';
	var deedsRef = firebase.database().ref("deeds");
	$scope.deeds = $firebaseArray(deedsRef);
}]);
