'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp', []);
phonecatApp.controller('PhoneListCtrl', ['$scope', function ($scope) {
	$scope.phones=[
		{'name':'Galaxy','snippet':'Fast just got faster with Nexus S.'},
		{'name': 'Motorola XOOM™ with Wi-Fi','snippet': 'The Next, Next Generation tablet.'},
    	{'name': 'MOTOROLA XOOM™','snippet': 'The Next, Next Generation tablet.'}
	];
}]);