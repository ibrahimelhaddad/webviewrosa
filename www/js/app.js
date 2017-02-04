angular.module("webviewrosa", ["ngCordova","ionic","ionMdInput","ionic-material","ion-datetime-picker","ionic.rating","utf8-base64","angular-md5","webviewrosa.controllers", "webviewrosa.services"])
	.run(function($ionicPlatform,$window,$interval) {
		$ionicPlatform.ready(function() {
			if(window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				cordova.plugins.Keyboard.disableScroll(true);
			}

			if(window.StatusBar) {
				StatusBar.styleDefault();
			}


		});
	})


	.filter("to_trusted", ["$sce", function($sce){
		return function(text) {
			return $sce.trustAsHtml(text);
		};
	}])

	.filter("trustUrl", function($sce) {
		return function(url) {
			return $sce.trustAsResourceUrl(url);
		};
	})

	.filter("trustJs", ["$sce", function($sce){
		return function(text) {
			return $sce.trustAsJs(text);
		};
	}])

	.filter("strExplode", function() {
		return function($string,$delimiter) {
			if(!$string.length ) return;
			var $_delimiter = $delimiter || "|";
			return $string.split($_delimiter);
		};
	})

	.filter("strDate", function(){
		return function (input) {
			return new Date(input);
		}
	})
	.filter("strHTML", ["$sce", function($sce){
		return function(text) {
			return $sce.trustAsHtml(text);
		};
	}])
	.filter("strEscape",function(){
		return window.encodeURIComponent;
	})






.config(function($stateProvider,$urlRouterProvider,$sceDelegateProvider,$ionicConfigProvider,$httpProvider){
	/** tabs position **/
	$ionicConfigProvider.tabs.position("bottom"); 
	try{
	// Domain Whitelist
		$sceDelegateProvider.resourceUrlWhitelist([
			"self",
			new RegExp('^(http[s]?):\/\/(w{3}.)?youtube\.com/.+$'),
			new RegExp('^(http[s]?):\/\/(w{3}.)?w3schools\.com/.+$'),
		]);
	}catch(err){
		console.log("%cerror: %cdomain whitelist","color:blue;font-size:16px;","color:red;font-size:16px;");
	}
	$stateProvider
	.state("webviewrosa",{
		url: "/webviewrosa",
		abstract: true,
		templateUrl: "templates/webviewrosa-tabs.html",
	})

	.state("webviewrosa.about_us", {
		url: "/about_us",
		views: {
			"webviewrosa-about_us" : {
						templateUrl:"templates/webviewrosa-about_us.html",
						controller: "about_usCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("webviewrosa.dashboard", {
		url: "/dashboard",
		views: {
			"webviewrosa-dashboard" : {
						templateUrl:"templates/webviewrosa-dashboard.html",
						controller: "dashboardCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("webviewrosa.dashborad", {
		url: "/dashborad",
		views: {
			"webviewrosa-dashborad" : {
						templateUrl:"templates/webviewrosa-dashborad.html",
						controller: "dashboradCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("webviewrosa.home", {
		url: "/home",
		views: {
			"webviewrosa-home" : {
						templateUrl:"templates/webviewrosa-home.html",
						controller: "homeCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("webviewrosa.menu1", {
		url: "/menu1",
		views: {
			"webviewrosa-menu1" : {
						templateUrl:"templates/webviewrosa-menu1.html",
						controller: "menu1Ctrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("webviewrosa.menu_1", {
		url: "/menu_1",
		views: {
			"webviewrosa-menu_1" : {
						templateUrl:"templates/webviewrosa-menu_1.html",
						controller: "menu_1Ctrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("webviewrosa.menu_2", {
		url: "/menu_2",
		views: {
			"webviewrosa-menu_2" : {
						templateUrl:"templates/webviewrosa-menu_2.html",
						controller: "menu_2Ctrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("webviewrosa.slide_tab_menu", {
		url: "/slide_tab_menu",
		views: {
			"webviewrosa-slide_tab_menu" : {
						templateUrl:"templates/webviewrosa-slide_tab_menu.html",
						controller: "slide_tab_menuCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	$urlRouterProvider.otherwise("/webviewrosa/dashboard");
});
