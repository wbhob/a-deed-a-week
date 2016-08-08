webApp.controller('LatestController', ['$scope', '$firebaseArray', '$firebaseObject', function($scope, $firebaseArray, $firebaseObject) {
	var deedsRef = firebase.database().ref("deeds");
	$scope.deeds = $firebaseArray(deedsRef);
}]);
