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
	.controller('words',['$scope','$http','$state',function($scope,$http,$state){
//		$scope.username = localStorage.getItem('username')
		$scope.tianjia = function(){
			$http({
				url:"http://47.88.16.225:406/users/?id="+localStorage.getItem('ta'),
				method:"POST",
				data:{
					name:$scope.mingzi,
					content:$scope.neiron
				}
			}).then(function(data){
				console.log(data)
				$state.go('words')
			})
		}
	}])