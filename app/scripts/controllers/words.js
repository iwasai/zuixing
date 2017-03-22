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
			})
		}
	}])
	.controller('yan',['$scope','$http','$state',function($scope,$http,$state){
//		$scope.username = localStorage.getItem('username')
		$scope.arr =  [];
			$http({
				url:"http://47.88.16.225:406/users",
				method:"get"
			}).then(function(data){
				console.log(data)
				$scope.dd = data.data;
				for(var i = 0;i<$scope.dd.length;i++){
					$scope.arr.push($scope.dd[i])
				}
			})
			$scope.shanchu = function($index){
				Fn();
				$http({
					url:"http://47.88.16.225:406/news?id="+$scope.ary,
					method:"get",
				}).then(function(data){
					console.log(data)
				})
			}
			
			$scope.ary = [];
			function Fn(){
				$http({
					url:"http://47.88.16.225:406/users",
					method:"get",
				}).then(function(data){
					console.log(data)
					$scope.de = data.data;
					for(var i=0;i<$scope.de.length;i++){
						$scope.ary.push($scope.de[i].id)
					}
					
				})
			}
	}])
