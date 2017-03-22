

//angular.module("appApp").controller("jgr",function($scope,$http){
//	$http({
//		url:"http://47.88.16.225:401/users/",
//		method:"POST",
//		data:$scope.sth
//	}).then(function(e){
//		var a=e.data.uid
//		$http({
//			url:"http://47.88.16.225:401/users/"+a,
//			method:"get"
//		}).then(function(e){
//			if(e.data.level=="0"){
//				$state.go()
//			}
//		})
//	})
//})