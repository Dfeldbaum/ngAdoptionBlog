console.log('linked');

// angular.module('adoptionBlog', ['ngRoute'])
// .config(['$locationProvider', '$routeProvider'],    // telling adoption model we need to inject our angular route and in config file we need location provider an route provider...keep track of what route youre on/control your routes
// 	function($locationProvider, $routeProvider) {
// 		$locationProvider.html5Mode({
// 			enabled: true,
// 			requiredBase: false
// 		});

// 		$routeProvider              // routes in angular
// 			.when('/', {
// 				templateUrl: 'ngViews/home.html', 
// 				controller: 'PostsCtrl'
// 			});

// 		// default route
// 		$routeProvider.otherwise({ redirectTo: '/'});
// 	}) 


angular.module('adoptionBlog', [ 'ngRoute'])
.config([
  '$locationProvider',
  '$routeProvider',
  function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode({
    	enabled: true,
    	requireBase: false // good for anything IE9+
    })

    $routeProvider
      .when('/', {
        templateUrl: 'ngViews/home.html',
        controller: 'PostsCtrl'
      });

    $routeProvider.otherwise({ redirectTo: '/' });
  }
]);