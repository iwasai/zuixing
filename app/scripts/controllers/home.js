'use strict';

/**
   * @ngdoc overview
   * @name appApp
   * @description
   * # appApp
   *
   * Main module of the application.
   */
angular.module("appApp")
	.controller('jgr',['$scope','$http','$state',function($scope,$http,$state){
		$http({
				url:"http://47.88.16.225:406/news",
				method:"get",
			}).then(function(data){
				console.log(data)
				$scope.quan = data.data;
			})
	}])