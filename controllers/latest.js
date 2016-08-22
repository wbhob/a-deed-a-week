webApp.controller('LatestController', ['$scope', '$firebaseArray', '$firebaseObject', '$q', '$timeout', function($scope, $firebaseArray, $firebaseObject, $q, $timeout) {
	var deedsRef = firebase.database().ref("deeds");
	$scope.deeds = $firebaseArray(deedsRef);
	$scope.filter = function(input) {
		var ref = firebase.database().ref("users/" + input);
		var obj = $firebaseObject(ref);
		obj.$loaded().then(function() {
			console.log(obj);
			return obj;
		});
	};
}]).directive("username", function($firebaseObject) {
	return {
		scope: {
			datasource: '=',
			add: '&',
		},
		link: function(scope, element, attrs) {
			console.log(scope);
				console.log(element);
					console.log(attrs);
			var html = '<h5></h5>';
			element.html(html);
			var ref = firebase.database().ref("users/" + attrs.user);
			var obj = $firebaseObject(ref);
			obj.$loaded().then(function() {
				console.log(obj.name);
				html = "by "
				html += obj.name;
				element.find('h5').html(html);
			});
		}
	};
});
