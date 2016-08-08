webApp.controller('ComposeController', ['$scope', '$firebaseArray', '$firebaseObject', function($scope, $firebaseArray, $firebaseObject) {
	$scope.foo = 'bar';
	$scope.popup = {};
	$scope.format = "MMMM d, yyyy";
	$scope.open = function() {
		$scope.popup.opened = true;
	};
	var deedsRef = firebase.database().ref("deeds");
	$scope.deeds = $firebaseArray(deedsRef);
	$scope.addDeed = function() {
		$scope.deeds.$add($scope.new);
		$scope.new = {};
	};
	$scope.tinymceOptions = {
		onChange: function(e) {
			// put logic here for keypress and cut/paste changes
		},
		inline: false,
		plugins: 'advlist autolink link image lists charmap print preview',
		skin: 'lightgray',
		theme: 'modern'
	};
}]);
