
// Gathers personal info data from form, handles form validation
app.controller("personalInfoController", function($scope) {
	//shipment part
	$scope.personnummer="";
	$scope.firstname="";
	$scope.lastname="";
	$scope.address="";
	$scope.extraAddressLine="";
	$scope.postCode="";
	$scope.city="";
	$scope.email="";
	$scope.phoneNumber="";
	
	$scope.shipmentAddressToggle=false;
	$scope.shipFirstname="";
	$scope.shipLastname="";
	$scope.shipAddress="";
	$scope.shipExtraAddressLine="";
	$scope.shipPostCode="";
	$scope.shipCity="";
	
	$scope.newsletterReg=false;
	$scope.termsAndConditions=false;
	
    $scope.personnummerPattern = /^\d{10}$/;
    $scope.emailPattern = /\S+@\S+\.\S+/;
    $scope.phoneNumberPattern = /^\d{10}$/;
    $scope.postCodePattern = /^\d{5}$/;
	
	//an error is displayed only if the field is not foccused anymore
	$scope.personnummerAutoErrorAllowed = false;
	$scope.personnummerErrorAllowed = false;
	$scope.emailErrorAllowed = false;
	$scope.emailCtrlErrorAllowed = false;
	$scope.phoneNumberErrorAllowed = false;
	$scope.postCodeErrorAllowed = false;
	
});
