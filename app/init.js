webApp = angular.module('WebApp', ['ui.router', 'ui.bootstrap', 'ui.tinymce', 'ngSanitize', 'firebase']);

webApp.run(function($rootScope) {
	$rootScope.$on('$routeChangeSuccess', function(ev, data) {
		if (data && data.controller) {
			var controller = data.controller;
			controller = controller.charAt(0).toLowerCase() + controller.slice(1);
			controller = controller.replace(/Controller/g, '');
			$rootScope.controller = controller;
		}
	});
});
