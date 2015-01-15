
// login controller, handles form validation
app.controller("logInController", function($scope) {
    $scope.emailPattern = /\S+@\S+\.\S+/;
	
	$scope.logInEmail="";
	$scope.logInPassword="";
	
	$scope.logInEmailErrorAllowed = false;
	$scope.logInPasswordErrorAllowed = false;
});
