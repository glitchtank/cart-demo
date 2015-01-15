//Manages the cart and payment choices
app.controller("checkoutController", function($scope) {
    $scope.normalShippingPrice = 0.00;
    $scope.expressShippingPrice = 50.00;
    $scope.selectedShippingPrice = 0.00;
	$scope.shipmentCountry = "sweden";
	$scope.taxes = 0.25; //25% of taxes
	$scope.discountCode = "";
	
	//selected payment method. Default, klarna faktura.
	$scope.paymentMethod = "klarna_faktura";
	
	$scope.klarnaFakturaPrice = 29.00;
	$scope.klarnaKontoSelectedPlan = 0;
	//the klarna konto method of payment, with monthly price. FOrmula unknow, this is a placeholder.
	$scope.klarnaKontoPlans = [
		{
		'name' : "Handla nu - Betala i slutet av januari",
		'help' : "Minsta kostnad är 1 kr",
		'price' : 2776
		},
		{
		'name' : "3 mån",
		'help' : "Minsta kostnad är 1000 kr",
		'price' : 968
		},
		{
		'name' : "6 mån",
		'help' : "Minsta kostnad är 1000 kr",
		'price' : 524
		},
		{
		'name' : "12 mån",
		'help' : "Minsta kostnad är 1000 kr",
		'price' : 283
		},
		{
		'name' : "24 mån",
		'help' : "Minsta kostnad är 1000 kr",
		'price' : 176
		},
		{
		'name' : "Konto",
		'help' : "Minsta kostnad är 1 kr",
		'price' : 173
		},
		{
		'name' : "36 mån",
		'help' : "Minsta kostnad är 1000 kr",
		'price' : 129
		}
	];
	
	//credit cards available and selected one (index).
	$scope.creditCardSelectedChoice = 0;
	$scope.creditCardChoices = ["Visa","Mastercard","Diners"];
	
	//sample products
	$scope.products = [
		{
		'id' : 0,
		'name' : "Fotogenlampa",
		'price' : "149.00",
		'picture' : "sample/1.png",
		'description' : "Artikelnummer: dl445k575464",
		'quantity' : 1
		},
		{
		'id' : 1,
		'name' : "Oljelampa",
		'price' : "349.00",
		'picture' : "sample/2.png",
		'description' : "Artikelnummer: oj484k5763464",
		'quantity' : 2
		},
		{
		'id' : 2,
		'name' : "Skrivbordslampa",
		'price' : "275.00",
		'picture' : "sample/3.png",
		'description' : "Artikelnummer: fg244k954734",
		'quantity' : 1
		},
		{
		'id' : 3,
		'name' : "Mässing lampa",
		'picture' : "sample/4.png",
		'price' : "399.00",
		'description' : "Artikelnummer: ze754k521694",
		'quantity' : 4
		}
	];
	
	//manage quantity and get the total price
	$scope.increaseQuantity = function(idToIncrease){
		var index = arrayObjectIndexOf($scope.products, "id", idToIncrease);
		$scope.products[index].quantity++;
	};
	
	$scope.decreaseQuantity = function(idToDecrease){
		var index = arrayObjectIndexOf($scope.products, "id", idToDecrease);
		if($scope.products[index].quantity>1){
			$scope.products[index].quantity--;
		}
	};
	
	$scope.removeProduct = function(idToRemove){	
		var index = arrayObjectIndexOf($scope.products, "id", idToRemove);
		$scope.products.splice(index,1);
	};
	
	$scope.getTotalProductsPrice = function(){
		var total = 0;
		for(var i = 0; i < $scope.products.length; i++){
			var product = $scope.products[i];
			total += (product.price * product.quantity);
		}
		return total;
	};
	
	$scope.getTotalPrice = function(){
		var total = $scope.getTotalProductsPrice();
		total+=$scope.selectedShippingPrice;
		if($scope.paymentMethod == "klarna_faktura"){
			total+=$scope.klarnaFakturaPrice;
		}
		return total;
	};

	//force a tab selection (usefull when clicking on a country with differement payment method available).
	$scope.selectTab = function(tabId){
		angular.element('#'+tabId).trigger('click');
	};
	
});

