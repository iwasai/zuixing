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
.controller('login',['$scope','$http','$state',function($scope,$http,$state){
	$scope.username = '';
	$scope.password = '';
	$scope.name = '';
	$scope.email = '';
	$scope.phone = '';
	$scope.liuyan = '';
	$scope.zhuce = function(){
		alert(5)
		$http({
			url:"http://47.88.16.225:406/users",
			method:"POST",
			data:{
				username:$scope.username,
				password:$scope.password,
				name:$scope.name,
				email:$scope.email,
				tel:$scope.phone,
				liuyan:$scope.liuyan
			}
		}).then(function(data){
			console.log(data)
			alert('注册成功')
			localStorage.setItem('username',$scope.username);
			localStorage.setItem('password',$scope.password);
			localStorage.setItem('name',$scope.name);
			localStorage.setItem('email',$scope.email);
			localStorage.setItem('phone',$scope.phone);
			localStorage.setItem('liuyan',$scope.liuyan);
			$state.go('list')
		},function(data){
			console.log(data)
			alert('注册失败')
		})
	}
}])	
