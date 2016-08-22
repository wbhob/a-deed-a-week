webApp.service("$user", function() {}).controller('LoginController', ['$scope', '$firebaseArray', '$firebaseObject', '$firebaseAuth', '$user', '$state', '$rootScope',
	function($scope, $firebaseArray, $firebaseObject, $firebaseAuth, $user, $state, $rootScope) {
		var auth = $firebaseAuth();
		var authstate = auth.$getAuth();
		if (!authstate) {
			$state.go("profile");
		}
		$scope.signIn = function() {
			auth.$signInWithEmailAndPassword($scope.login.email, $scope.login.password).then(function(authData) {
				var userref = firebase.database().ref("users/" + authData.uid);
				$user.profile = $firebaseObject(userref);
				console.log($rootScope.fromState);
				if ($rootScope.fromState && $rootScope.fromState.name != 'login' && $rootScope.fromState.name != 'register' && $rootScope.fromState.name !== '') {
					$state.go($rootScope.fromState.name);
				} else {
					$state.go("latest");
				}
			}).catch(function(err) {
				console.log(err);
			});
		};
		$scope.signInFacebook = function() {
			auth.$signInWithPopup("facebook").then(function(authData) {
				var userref = firebase.database().ref("users/" + authData.uid);
				$scope.user = $firebaseObject(userref);
				$scope.user.email = $scope.login.email;
				$scope.user.password = $scope.login.password;
				$scope.user.name = $scope.login.name;
				$scope.user.$save();
			});
		};
}]);
