'use strict';

/**
 * @ngdoc overview
 * @name appApp
 * @description
 * # appApp
 *
 * Main module of the application.
 */
angular.module('appApp')
	.controller('manage', ['$scope', '$http', '$state', function($scope, $http, $state) {
		$scope.arr = [];
		$scope.img = []
		$scope.odd = function() {
			var img = document.getElementsByClassName('imgSrc')[0]
			$scope.img = img.src
			if(img.src == ''){
				alert('hahha ')
			}else{
				$http({
				url: "http://47.88.16.225:406/anli",
				method: "post",
				data: {
					img: $scope.img
				}
			}).then(function(data) {
				
				console.log(data)
				location.reload()
			})
			}
			
		}
		$http({
			url: "http://47.88.16.225:406/anli",
			method: "get",
		}).then(function(data) {
			console.log(data)
			for(var i = 0; i < data.data.length; i++) {
				$scope.arr.push(data.data[i])
			}
		})
	}])