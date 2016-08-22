webApp.controller('RegisterController', ['$scope', '$firebaseArray', '$firebaseObject', '$firebaseAuth', '$user', '$state',
function($scope, $firebaseArray, $firebaseObject, $firebaseAuth, $user, $state) {
		var Auth = $firebaseAuth();
		$scope.signUp = function() {
			Auth.$createUserWithEmailAndPassword($scope.login.email, $scope.login.password).then(function(authData) {
				console.log(authData);
				var userref = firebase.database().ref("users/" + authData.uid);
				$user.profile = $firebaseObject(userref);
				$user.profile.email = $scope.login.email;
				$user.profile.password = $scope.login.password;
				$user.profile.name = $scope.login.name;
				$user.profile.$save();
				$state.go("login");
			}).catch(function(err) {
				console.log(err);
				if(err.code == "auth/email-already-in-use") {
					alert("You have already registered. You will be redirected.");
					$state.go("login");
				}
			});
		};
		$scope.signInFacebook = function() {
			Auth.$signInWithPopup("facebook").then(function(authData) {
				var userref = firebase.database().ref("users/" + authData.uid);
				$scope.user = $firebaseObject(userref);
				$scope.user.email = $scope.login.email;
				$scope.user.password = $scope.login.password;
				$scope.user.name = $scope.login.name;
				$scope.user.$save();
				$state.go("latest");
			});
		};
}]);
