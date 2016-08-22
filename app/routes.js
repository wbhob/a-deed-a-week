webApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('featured', {
			url:"/featured",
			templateUrl: 'views/featured.html',
			controller: 'FeaturedController'
		}).state('latest', {
			url:"/latest",
			templateUrl: 'views/latest.html',
			controller: 'LatestController'
		}).state('compose', {
			url:"/compose",
			templateUrl: 'views/compose.html',
			controller: 'ComposeController'
		}).state('login', {
			url:"/login",
			templateUrl: 'views/login.html',
			controller: 'LoginController'
		}).state('register', {
			url:"/register",
			templateUrl: 'views/register.html',
			controller: 'RegisterController'
		}).state('profile', {
			url:"/profile",
			templateUrl: 'views/profile.html',
			controller: 'ProfileController'
		});
		$urlRouterProvider.otherwise("latest");
}]);
