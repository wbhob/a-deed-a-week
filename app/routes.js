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
		});
		$urlRouterProvider.otherwise("latest");
}]);
