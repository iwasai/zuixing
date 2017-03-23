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
		
		var input = document.getElementById("file");
		var result = document.getElementById("result");
		var img_area = document.getElementById("image-wrap");
		
		if(typeof(FileReader) === 'undefined') {
			result.innerHTML = "抱歉，你的浏览器不支持 FileReader，请使用现代浏览器操作！";
			input.setAttribute('disabled', 'disabled');
		} else {
			input.addEventListener('change', readFile, false);
		}
	function readFile() {
		var file = this.files[0];
		//这里我们判断下类型如果不是图片就返回 去掉就可以上传任意文件 
		if(!/image\/\w+/.test(file.type)) {
			alert("请确保文件为图像类型");
			return false;
		}
		var reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function(e) {
			result.innerHTML = '<img src="' + this.result + '" alt=""/>';
			img_area.innerHTML = '<img src="' + this.result + '" alt="" class="imgSrc"/>'
		}
	}
		
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
	.controller('woqu', ['$scope', '$http', '$state', function($scope, $http, $state) {
		$scope.arr = [];
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
