webApp.controller('ComposeController', ['$scope', '$firebaseArray', '$firebaseObject', '$firebaseAuth', '$state', function($scope, $firebaseArray, $firebaseObject, $firebaseAuth, $state) {
	var auth = $firebaseAuth();
	var authstate = auth.$getAuth();
	if (!authstate) {
		$state.go("login");
	}
	$scope.popup = {};
	$scope.format = "MMMM d, yyyy";
	$scope.open = function() {
		$scope.popup.opened = true;
	};
	var deedsRef = firebase.database().ref("deeds");
	$scope.deeds = $firebaseArray(deedsRef);
	$scope.addDeed = function() {
		if ($scope.new.date) {
			$scope.new.date = $scope.new.date.toDateString();
		}
		$scope.new.user = authstate.uid;
		if ($scope.new.image && $scope.new.image.length <= 10000000) {
			console.log("DONE");
			$scope.deeds.$add($scope.new);
			$scope.new = {};
		}
	};
	$scope.log = function() {
		console.log($scope.new.image);
		console.log($scope.new.image.length);
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
}]).directive('appFilereader', function($q) {
	var slice = Array.prototype.slice;

	return {
		restrict: 'A',
		require: '?ngModel',
		link: function(scope, element, attrs, ngModel) {
				if (!ngModel) return;

				ngModel.$render = function() {};

				element.bind('change', function(e) {
					var element = e.target;

					$q.all(slice.call(element.files, 0).map(readFile))
						.then(function(values) {
							if (element.multiple) ngModel.$setViewValue(values);
							else ngModel.$setViewValue(values.length ? values[0] : null);
						});

					function readFile(file) {
						var deferred = $q.defer();

						var reader = new FileReader();
						reader.onload = function(e) {
							deferred.resolve(e.target.result);
						};
						reader.onerror = function(e) {
							deferred.reject(e);
						};
						reader.readAsDataURL(file);

						return deferred.promise;
					}

				}); //change

			} //link
	}; //return
});
