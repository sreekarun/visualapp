'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Menus',
	function($scope, Menus) {
		$scope.isCollapsed = false;
		Menus.addMenuItem('topbar', 'Create Test', 'createtest');
		$scope.menu = Menus.getMenu('topbar');

		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};
		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', function() {
			$scope.isCollapsed = false;
		});
	}
]);