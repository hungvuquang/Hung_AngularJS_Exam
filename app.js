// Code goes here

var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope){
	console.log("My controller.....");
	$scope.acount = " hungvq1@vnpt.vn";
		
		
		$scope.users = [
			{name: "Vũ Quang Hưng", email: 10, fullname: "hung"},
			{name: "Cao Kim hạnh", email: 20, fullname: "hanh"},
			{name: "Đặng Kim Thi", email: 30, fullname: "thi"}
		];

	$scope.addUser = function(){
		$scope.users.push($scope.newUser);
		$scope.newUser = {};
		$scope.message = "New User Added successfully";
	};
	
	$scope.selectUser = function(user){
		console.log(user);
		$scope.clickedUser = user;
	};

	$scope.editUser = function(){
		$scope.message = "User Edited successfully";
	};

	$scope.deleteUser = function(){
		$scope.users.splice($scope.users.indexOf($scope.clickedUser));
		$scope.message = "User Deleted successfully";
	};

	$scope.clearMessage = function(){
		$scope.message = "";
	};

});